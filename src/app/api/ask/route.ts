import { NextRequest, NextResponse } from "next/server";
import { askGPTFromText } from "../../../lib/ai/openai";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  const tmpDir = path.join(process.cwd(), "public", "tmp");

  // Създай папката, ако не съществува
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  const files = fs.readdirSync(tmpDir);

  // Филтриране само на файлове с позволени разширения
  const candidateFiles = files.filter((f) =>
    [".pdf", ".docx", ".jpg", ".jpeg", ".png"].some((ext) =>
      f.toLowerCase().endsWith(ext),
    ),
  );

  // Избор на най-новия файл
  const sortedFiles = candidateFiles
    .map((name) => ({
      name,
      mtime: fs.statSync(path.join(tmpDir, name)).mtime,
    }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

  const latestFile = sortedFiles.length > 0 ? sortedFiles[0].name : null;

  if (!latestFile) {
    return NextResponse.json({
      answer: "❌ Няма наличен файл за анализ.",
    });
  }

  const filePath = path.join(tmpDir, latestFile);
  const { extractText } = await import("../../../lib/ai/extractText");
  const context = await extractText(filePath);

  const gptResponse = await askGPTFromText(question, context);

  // Генерирай достъпен линк за клиента
  const fileUrl = `/tmp/${latestFile}`;

  return NextResponse.json({
    answer: gptResponse,
    fileUrl: fileUrl,
    filename: latestFile,
  });
}
