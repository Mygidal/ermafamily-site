// src/app/api/contact/route.ts

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
// отключаваме временния OCR, за да проверим първо ъплоуда и Gemini
// import { extractText } from "@/lib/ai/extractText";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log("▶️ formData keys:", Array.from(formData.keys()));

  const question = formData.get("question")?.toString() || "";
  const lang = formData.get("lang")?.toString() || "bg";
  const uploaded = formData.get("attachment");
  console.log("▶️ uploaded:", uploaded);

  let file: File | null = null;
  let fileName = "";

  if (uploaded && typeof uploaded !== "string") {
    file = uploaded as File;
    fileName = "name" in file ? file.name : "uploaded-file";
  }

  // Създаваме tmp/, ако липсва
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    await mkdir(tmpDir);
  }

  let savedFile = null;
  // временно пропускаме OCR и връщаме само url-та
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const finalName = `${uuidv4()}-${fileName}`;
    const filePath = path.join(tmpDir, finalName);

    try {
      await writeFile(filePath, buffer);
      console.log("📁 Качен файл:", fileName, "→", filePath);
    } catch (writeErr) {
      console.error("❌ Грешка при запис на файл:", writeErr);
    }

    savedFile = {
      name: fileName,
      url: `/tmp/${finalName}`,
    };
  }

  // задаваме само базовия контекст, без OCR текст
  const baseContext =
    {
      bg: "Отговаряй на български, кратко и професионално.",
      en: "Respond in English, brief and professional.",
      de: "Antworte auf Deutsch, kurz und professionell.",
    }[lang] || "";

  let answer = "";
  try {
    answer = await askGeminiFromText(
      question || "Потребителят качи файл.",
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
    success: true,
    answer,
    file: savedFile,
  });
}
