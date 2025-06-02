import { NextRequest, NextResponse } from "next/server";
import { askGeminiFromText } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const question = formData.get("question")?.toString() || "";
    const lang = formData.get("lang")?.toString() || "bg";

    const baseContext =
      {
        bg: "Отговаряй на български, кратко и професионално.",
        en: "Respond in English, brief and professional.",
        de: "Antworte auf Deutsch, kurz und professionell.",
      }[lang] || "";

    const finalPrompt = [baseContext, question].filter(Boolean).join("\n\n");

    const answer = await askGeminiFromText(finalPrompt, baseContext);

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
