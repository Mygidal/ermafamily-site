import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name")?.toString() || "Без име";
  const email = formData.get("email")?.toString() || "Без имейл";
  const phone = formData.get("phone")?.toString() || "Без телефон";
  const message = formData.get("message")?.toString() || "Без съобщение";

  // Debug: Покажи SMTP настройките (без паролата)
  console.log("SMTP config:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS ? "***" : "MISSING",
    to: process.env.MAIL_TO,
  });

  try {
    // Пробвай първо с порт 587 и secure: false (по-стабилно за Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true за 465, false за 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
    });

    // Debug: Провери връзката със SMTP
    await transporter.verify();
    console.log("SMTP връзката е успешна!");

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
      { success: false, error: "Неуспешно изпращане", details: String(err) },
      { status: 500 },
    );
  }
}
