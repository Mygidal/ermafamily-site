export const config = {
  api: {
    bodyParser: false,
  },
};

import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { askGeminiFromText } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log("▶️ formData keys:", Array.from(formData.keys()));

  const question = formData.get("question")?.toString() || "";
  const lang = formData.get("lang")?.toString() || "bg";
  const attachments = formData.getAll("attachment_0") as File[];

  // Създаваме public/tmp/, ако липсва
  const tmpDir = path.join(process.cwd(), "public", "tmp");
  if (!fs.existsSync(tmpDir)) {
    await mkdir(tmpDir);
  }

  const savedFiles: { name: string; url: string }[] = [];

  // Запазваме всички качени файлове
  if (attachments && attachments.length > 0) {
    for (const attachment of attachments) {
      const fileName = "name" in attachment ? attachment.name : "uploaded-file";
      const buffer = Buffer.from(await attachment.arrayBuffer());
      const finalName = `${uuidv4()}-${fileName}`;
      const filePath = path.join(tmpDir, finalName);

      try {
        await writeFile(filePath, buffer);
        console.log("📁 Качен файл:", fileName, "→", filePath);
        savedFiles.push({ name: fileName, url: `/tmp/${finalName}` });
      } catch (writeErr) {
        console.error("❌ Грешка при запис на файл:", writeErr);
      }
    }
  }

  // Задаваме базов контекст, без OCR текст
  const baseContext =
    {
      bg: "Отговаряй на български, кратко и професионално.",
      en: "Respond in English, brief and professional.",
      de: "Antworte auf Deutsch, kurz und professionell.",
    }[lang] || "";

  let answer = "";
  try {
    answer = await askGeminiFromText(
      question ||
        (savedFiles.length > 0 ? "Потребителят качи файлове." : "Няма въпрос."),
      baseContext,
    );
  } catch (geminiErr) {
    console.error("❌ Gemini API Error:", geminiErr);
    answer =
      lang === "bg"
        ? "ERMA AI временно е недостъпен, опитайте по-късно."
        : lang === "en"
          ? "ERMA AI is currently unavailable. Please try again later."
          : "ERMA AI ist derzeit nicht verfügbar. Versuchen Sie es später erneut.";
  }

  return NextResponse.json({
    answer,
    files: savedFiles,
  });
}
