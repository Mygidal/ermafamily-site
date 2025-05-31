import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const tmpDir = path.join(process.cwd(), "public", "tmp");
  if (!fs.existsSync(tmpDir)) {
    return NextResponse.json({
      success: false,
      message: "❌ Липсва tmp папка.",
    });
  }

  const files = fs.readdirSync(tmpDir);
  for (const file of files) {
    fs.unlinkSync(path.join(tmpDir, file));
  }

  return NextResponse.json({ success: true });
}
