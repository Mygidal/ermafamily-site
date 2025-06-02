// src/lib/ai/extractText.ts

import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import Tesseract from "tesseract.js";

console.log("🧠 extractText.ts зареден");

export async function extractText(filePath: string): Promise<string> {
  if (!filePath || typeof filePath !== "string") {
    return "[Невалиден път до файл]";
  }

  const ext = path.extname(filePath).toLowerCase();

  if (!fs.existsSync(filePath)) {
    console.warn("⚠️ Файлът не съществува:", filePath);
    return "[Файлът не беше намерен]";
  }

  try {
    if (ext === ".pdf") {
      const buffer = fs.readFileSync(filePath);
      const data = await pdfParse(buffer);
      return data.text.trim() || "[PDF не съдържа текст]";
    }

    if (ext === ".docx") {
      const buffer = fs.readFileSync(filePath);
      const result = await mammoth.extractRawText({ buffer });
      return result.value.trim() || "[DOCX не съдържа текст]";
    }

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      const result = await Tesseract.recognize(filePath, "eng", {
        logger: () => {},
      });
      return (
        result.data.text.trim() || "[Не бе разпознат текст в изображението]"
      );
    }

    return `[Неподдържан файлов формат: ${ext}]`;
  } catch (err) {
    console.error("❌ Грешка при извличане на текст:", err);
    return "[Неуспешно извличане на текст от файла]";
  }
}
