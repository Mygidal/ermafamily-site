import { NextRequest, NextResponse } from "next/server";
import { askErmaAI } from "@/lib/ai/askErmaAI";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const question = formData.get("question")?.toString() || "";
    const lang = formData.get("lang")?.toString() || "bg";
    const historyRaw = formData.get("history")?.toString() || "[]";

    let history: ChatCompletionMessageParam[] = [];
    try {
      history = JSON.parse(historyRaw);
      console.log("📨 Получена история в API:", history);
    } catch (e) {
      console.warn("⚠️ Историята не може да бъде парсната:", e);
    }

    const answer = await askErmaAI(question, history); // автоматично избира GPT или Gemini

    return NextResponse.json({
      answer,
      files: [], // няма прикачени файлове
    });
  } catch (err) {
    console.error("❌ Грешка при свързване с AI:", err);
    return NextResponse.json(
      { error: "Възникна грешка при връзката с ERMA AI." },
      { status: 500 },
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
