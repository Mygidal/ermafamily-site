import { ermaKnowledgeBase } from "../../data/ermaKnowledgeBase";

import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

export async function askGeminiFromText(
  promptOrMessages: string | ChatCompletionMessageParam[],
  contextText?: string,
): Promise<string> {
  if (!GEMINI_API_KEY) {
    console.error("❌ Липсва Gemini API ключ!");
    return "Настъпи вътрешна грешка: няма конфигуриран AI ключ.";
  }

  // Основен системен prompt + инструкции + знания
  const basePrompt = `
You must always detect and respond in the same language as the user's input.

- Do not ask what language to continue in.
- Never say “Which language would you prefer I respond in?”
- Never say “На какъв език предпочитате да продължим?”
- Never repeat language confirmation questions.
- Detect the language automatically from the user's input.
- Use the script/alphabet (Cyrillic, Latin, Greek, Chinese, etc.) to determine the language.
- If the input is in Cyrillic, respond in Bulgarian.
- If the input is in Greek script, respond in Greek.
- If the input is in Chinese characters, respond in Chinese.
- If the input is in Latin script, respond in English (unless otherwise implied).
- If the input is short — respond in the language of the input.
- If the user does not repeat the square footage (РЗП) in future questions, use the last known value from earlier messages. Do not ask again.

Once the language is known, respond in it automatically and consistently.
Never explain this behavior to the user.

${ermaKnowledgeBase}
  `.trim();

  // Сглобяване на контекста за Gemini API
  let contents;

  if (typeof promptOrMessages === "string") {
    contents = [
      {
        role: "model",
        parts: [{ text: basePrompt }],
      },
      {
        role: "user",
        parts: [
          {
            text:
              contextText ||
              "Answer concisely and professionally in the same language as the question.",
          },
          { text: `Въпрос: ${promptOrMessages}` },
        ],
      },
    ];
  } else {
    contents = [
      {
        role: "model",
        parts: [{ text: basePrompt }],
      },
      ...promptOrMessages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
    ];
  }

  console.log("🧠 Подадени части към Gemini:", contents);

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      },
    );

    if (!res.ok) {
      console.error("❌ Грешка от Gemini API:", res.status);
      return "Грешка при връзката с AI.";
    }

    const data = await res.json();
    console.log("📦 Gemini raw response:", JSON.stringify(data, null, 2));

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      console.error("⚠️ Няма отговор от Gemini:", data);
      return "Няма отговор от Gemini.";
    }

    return reply;
  } catch (err: any) {
    console.error("❌ Грешка при заявка към Gemini:", err);
    return "Възникна грешка при връзката с AI.";
  }
}
