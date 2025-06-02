// ✅ handleFileProcessing.ts

import fs from "fs";
import path from "path";
import { writeFile, mkdir } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import { extractText } from "@/lib/ai/extractText";

export async function handleFileProcessing(attachments: File[]) {
  const tmpDir = path.join(os.tmpdir(), "ermaai");
  if (!fs.existsSync(tmpDir)) {
    await mkdir(tmpDir);
  }

  const savedFiles: { name: string; url: string }[] = [];
  let extractedTextAll = "";

  for (const attachment of attachments) {
    const fileName = "name" in attachment ? attachment.name : "uploaded-file";
    const buffer = Buffer.from(await attachment.arrayBuffer());
    const finalName = `${uuidv4()}-${fileName}`;
    const filePath = path.resolve(tmpDir, finalName);

    try {
      await writeFile(filePath, buffer);
      console.log("📁 Качен файл:", fileName, "→", filePath);
      savedFiles.push({ name: fileName, url: `/tmp/${finalName}` });

      try {
        const extracted = await extractText(filePath);
        if (extracted) {
          extractedTextAll += `\n\n[${fileName}]\n${extracted}`;
        }
      } catch (extractErr) {
        console.warn(`⚠️ extractText неуспешно за ${fileName}:`, extractErr);
        extractedTextAll += `\n\n[${fileName}]\n⚠️ Файлът не можа да бъде прочетен.`;
      }
    } catch (writeErr) {
      console.error("❌ Грешка при запис на файл:", writeErr);
    }
  }

  return { extractedTextAll, savedFiles };
}
