import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import Tesseract from "tesseract.js";

console.log("🧠 extractText.ts зареден"); // ← ТУК

export async function extractText(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();

  if (!fs.existsSync(filePath)) {
    console.warn("⚠️ Файлът не съществува:", filePath);
    return "[Файлът не беше намерен]";
  }

  try {
    if (ext === ".pdf") {
      const buffer = fs.readFileSync(filePath);
      const data = await pdfParse(buffer);
      return data.text.trim();
    }

    if (ext === ".docx") {
      const buffer = fs.readFileSync(filePath);
      const result = await mammoth.extractRawText({ buffer });
      return result.value.trim();
    }

    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
      const result = await Tesseract.recognize(filePath, "eng", {
        logger: () => {},
      });
      return result.data.text.trim();
    }
  } catch (err) {
    console.error("❌ Грешка при извличане на текст:", err);
    return "[Неуспешно извличане на текст от файла]";
  }

  return `[Неподдържан файлов формат: ${ext}]`;
}
