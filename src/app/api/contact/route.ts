import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";
import path from "path";
import os from "os";
import { v4 as uuidv4 } from "uuid";
import { askGeminiFromText } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    console.log("▶️ formData keys:", Array.from(formData.keys()));

    const question = formData.get("question")?.toString() || "";
    const lang = formData.get("lang")?.toString() || "bg";
    const attachments = formData.getAll("attachment") as File[];

    const tmpDir = path.join(os.tmpdir(), "ermaai");
    if (!fs.existsSync(tmpDir)) {
      await mkdir(tmpDir);
    }

    const savedFiles: { name: string; url: string }[] = [];

    if (attachments && attachments.length > 0) {
      for (const attachment of attachments) {
        const fileName =
          "name" in attachment ? attachment.name : "uploaded-file";
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
          (savedFiles.length > 0
            ? "Потребителят качи файлове."
            : "Няма въпрос."),
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
  } catch (err) {
    console.error("❌ Грешка в /api/contact:", err);
    return NextResponse.json(
      { error: "Възникна грешка при обработка на заявката." },
      { status: 500 },
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
