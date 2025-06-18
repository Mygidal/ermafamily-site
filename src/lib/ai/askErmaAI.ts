import { askGeminiFromText } from "./gemini";
import { askGPTFromText as askOpenAIFromText } from "./openai";
import { getRelevantKnowledge } from "./getRelevantKnowledge";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

export type AIModel = "gemini" | "gpt";

function detectIfVisual(input: string, files?: File[]): AIModel {
  if (files && files.length > 0) return "gemini";
  if (/[🖼️📷📄]/.test(input)) return "gemini";
  return "gpt";
}

function detectLanguageInstruction(question: string): string {
  const q = question.toLowerCase();
  if (/[а-яё]/i.test(q)) return "bg";
  if (/[α-ωάέήίόύώ]/i.test(q)) return "el";
  if (/[你好|早上好]/.test(q)) return "zh";
  if (/[a-z]/i.test(q)) return "en";
  return "";
}

export async function askErmaAI(
  prompt: string,
  contextTextOrHistory: string | ChatCompletionMessageParam[] = [],
  model?: AIModel,
  files?: File[],
): Promise<string> {
  const selectedModel = model || detectIfVisual(prompt, files);
  console.log("🤖 Избран AI модел:", selectedModel);

  const lang = detectLanguageInstruction(prompt);

  const langPrefix =
    lang === "bg"
      ? "Отговаряй на български, кратко и професионално."
      : lang === "el"
        ? "Απάντησε στα ελληνικά, σύντομα και επαγγελματικά."
        : lang === "zh"
          ? "请用中文简洁而专业地回答。"
          : lang === "en"
            ? "Respond in English, brief and professional."
            : "";

  const contextParts = getRelevantKnowledge(prompt);
  console.log("📦 Вмъкнат контекст:", contextParts);
  console.log(
    "🧠 Дължина на контекста (в символи):",
    contextParts.join("\n\n").length,
  );

  const systemPrompt: ChatCompletionMessageParam = {
    role: "system",
    content: contextParts.join("\n\n") + "\n\n" + langPrefix,
  };

  if (Array.isArray(contextTextOrHistory)) {
    const limitedHistory = contextTextOrHistory.slice(-10);
    const messages: ChatCompletionMessageParam[] = [
      systemPrompt,
      ...limitedHistory,
      { role: "user", content: prompt },
    ];

    return selectedModel === "gemini"
      ? await askGeminiFromText(messages)
      : await askOpenAIFromText(messages);
  } else {
    const messages: ChatCompletionMessageParam[] = [
      systemPrompt,
      { role: "user", content: prompt },
    ];

    return selectedModel === "gemini"
      ? await askGeminiFromText(messages)
      : await askOpenAIFromText(messages);
  }
}
