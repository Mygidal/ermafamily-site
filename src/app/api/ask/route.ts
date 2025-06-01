import { NextRequest, NextResponse } from "next/server";
import { askGPTFromText } from "../../../lib/ai/openai";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { question, filename } = await req.json();

  const tmpDir = path.join(process.cwd(), "public", "tmp");

  // Създай папката, ако не съществува
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  let targetFile = "";

  if (filename) {
    const requestedFile = path.join(tmpDir, filename);
    if (fs.existsSync(requestedFile)) {
      targetFile = filename;
    } else {
      return NextResponse.json({
        answer: "❌ Файлът не е намерен в системата.",
      });
    }
  } else {
    const files = fs.readdirSync(tmpDir);
    const candidateFiles = files.filter((f) =>
      [".pdf", ".docx", ".jpg", ".jpeg", ".png"].some((ext) =>
        f.toLowerCase().endsWith(ext),
      ),
    );

    const sortedFiles = candidateFiles
      .map((name) => ({
        name,
        mtime: fs.statSync(path.join(tmpDir, name)).mtime,
      }))
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

    if (sortedFiles.length === 0) {
      return NextResponse.json({
        answer: "❌ Няма наличен файл за анализ.",
      });
    }

    targetFile = sortedFiles[0].name;
  }

  const filePath = path.join(tmpDir, targetFile);
  const { extractText } = await import("../../../lib/ai/extractText");
  const context = await extractText(filePath);

  const gptResponse = await askGPTFromText(question, context);

  return NextResponse.json({
    answer: gptResponse,
    fileUrl: `/tmp/${targetFile}`,
    filename: targetFile,
  });
}
