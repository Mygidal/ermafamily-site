import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name")?.toString() || "Без име";
  const email = formData.get("email")?.toString() || "Без имейл";
  const phone = formData.get("phone")?.toString() || "Без телефон";
  const message = formData.get("message")?.toString() || "Без съобщение";

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ERMA Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Ново запитване от сайта",
      html: `
        <h2>📩 Запитване от клиент</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Съобщение:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Email error:", err);
    return NextResponse.json(
      { success: false, error: "Неуспешно изпращане" },
      { status: 500 },
    );
  }
}
