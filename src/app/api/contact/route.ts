import { NextRequest, NextResponse } from "next/server";
import { askGeminiFromText } from "../../../lib/ai/gemini"; // 👈 нова функция

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const question = formData.get("question")?.toString() || "";
    const lang = formData.get("lang")?.toString() || "bg"; // 👈 по избор

    if (!question) {
      return NextResponse.json(
        { success: false, error: "Няма подаден въпрос." },
        { status: 400 },
      );
    }

    // Езикови инструкции
    const languageInstructions = {
      bg: "Отговаряй на български, кратко и професионално.",
      en: "Respond in English, briefly and professionally.",
      de: "Antwort auf Deutsch, kurz und professionell.",
    };

    const context =
      languageInstructions[lang as keyof typeof languageInstructions] ||
      languageInstructions.bg;

    const geminiAnswer = await askGeminiFromText(question, context);

    console.log("🤖 Gemini отговор:", geminiAnswer);

    return NextResponse.json({ success: true, answer: geminiAnswer });
  } catch (err: any) {
    console.error("❌ Gemini грешка:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Неизвестна грешка" },
      { status: 500 },
    );
  }
}
