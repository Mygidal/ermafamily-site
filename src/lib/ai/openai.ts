import { OpenAI } from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { ermaKnowledgeBase } from "../../../data/ermaKnowledgeBase";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  const error = "Не е зададен OPENAI_API_KEY в средата.";
  console.error(error);
  throw new Error(error);
}

const openai = new OpenAI({
  apiKey,
});

export async function askGPTFromText(
  messages: ChatCompletionMessageParam[],
): Promise<string> {
  console.log("🧠 Подадени messages към GPT:", messages);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.3,
  });

  return completion.choices[0].message.content || "";
}

export function getSystemPrompt(): ChatCompletionMessageParam {
  return {
    role: "system",
    content: `
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

Once the language is known, respond in it automatically and consistently.
Never explain this behavior to the user.

${ermaKnowledgeBase}
    `.trim(),
  };
}
