import { NextRequest, NextResponse } from "next/server";
import { askGPTFromText } from "../../../lib/ai/openai";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const question = formData.get("question")?.toString() || "";

    if (!question) {
      return NextResponse.json(
        { success: false, error: "Няма подаден въпрос." },
        { status: 400 },
      );
    }

    const gptAnswer = await askGPTFromText(
      question,
      "Контекст липсва. Отговори само по въпроса.",
    );
    console.log("🤖 GPT отговор:", gptAnswer);

    return NextResponse.json({ success: true, answer: gptAnswer });
  } catch (err: any) {
    console.error("❌ GPT контактна грешка:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 },
    );
  }
}
