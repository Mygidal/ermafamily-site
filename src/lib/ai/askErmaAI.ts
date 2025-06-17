import { askGeminiFromText } from "./gemini";
import { askGPTFromText as askOpenAIFromText, getSystemPrompt } from "./openai";
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
  console.log("📥 История, подадена към askErmaAI:", contextTextOrHistory);

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
            : typeof contextTextOrHistory === "string"
              ? contextTextOrHistory
              : "";

  const systemMessage: ChatCompletionMessageParam = {
    role: "system",
    content: getSystemPrompt().content + "\n\n" + langPrefix,
  };

  if (Array.isArray(contextTextOrHistory)) {
    const limitedHistory = contextTextOrHistory.slice(-10);
    const messages: ChatCompletionMessageParam[] = [
      systemMessage,
      ...limitedHistory,
      { role: "user", content: prompt },
    ];

    if (selectedModel === "gemini") {
      return await askGeminiFromText(messages);
    }

    return await askOpenAIFromText(messages);
  } else {
    const messages: ChatCompletionMessageParam[] = [
      systemMessage,
      { role: "user", content: prompt },
    ];

    if (selectedModel === "gemini") {
      return await askGeminiFromText(messages);
    }

    return await askOpenAIFromText(messages);
  }
}
