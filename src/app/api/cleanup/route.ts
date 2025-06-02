import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

export async function POST(req: NextRequest) {
  const tmpDir = path.join(os.tmpdir(), "ermaai");
  if (!fs.existsSync(tmpDir)) {
    return NextResponse.json({
      success: false,
      message: "❌ Липсва временната папка (ermaai).",
    });
  }

  const files = fs.readdirSync(tmpDir);
  for (const file of files) {
    try {
      fs.unlinkSync(path.join(tmpDir, file));
    } catch (err) {
      console.error("Грешка при изтриване на файл:", file, err);
    }
  }

  return NextResponse.json({ success: true });
}
