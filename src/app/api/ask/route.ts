import { NextRequest, NextResponse } from "next/server";
import { askGPTFromText } from "../../../lib/ai/openai";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  const tmpDir = path.join(process.cwd(), "/tmp");
  const files = fs.readdirSync(tmpDir);
  const latestFile = files.find((f) =>
    [".pdf", ".docx", ".jpg", ".jpeg", ".png"].some((ext) =>
      f.toLowerCase().endsWith(ext),
    ),
  );

  if (!latestFile) {
    return NextResponse.json({ answer: "❌ Няма наличен файл за анализ." });
  }

  const filePath = path.join(tmpDir, latestFile);
  const { extractText } = await import("../../../lib/ai/extractText");
  const context = await extractText(filePath);

  const gptResponse = await askGPTFromText(question, context);
  return NextResponse.json({ answer: gptResponse });
}
