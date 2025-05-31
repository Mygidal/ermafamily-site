import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { askGeminiFromText } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const question = formData.get("question")?.toString() || "";
  const lang = formData.get("lang")?.toString() || "bg";

  const uploaded = formData.get("attachment");
  let file: File | null = null;
  let fileName = "";

  if (uploaded && typeof uploaded !== "string") {
    file = uploaded as File;
    fileName = "name" in file ? file.name : "uploaded-file";
  }

  let savedFile = null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const finalName = `${uuidv4()}-${fileName}`;
    const filePath = path.join(process.cwd(), "tmp", finalName);

    await writeFile(filePath, buffer);

    savedFile = {
      name: fileName,
      url: `/tmp/${finalName}`,
    };

    console.log("📁 Качен файл:", fileName, "→", filePath);
  }

  const context =
    {
      bg: "Отговаряй на български, кратко и професионално.",
      en: "Respond in English, brief and professional.",
      de: "Antworte auf Deutsch, kurz und professionell.",
    }[lang] || "";

  const answer = await askGeminiFromText(question, context);

  return NextResponse.json({
    success: true,
    answer,
    file: savedFile,
  });
}
