import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // защото използваш 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: `"ERMA Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "✅ Тестов имейл от ERMA",
      text: "Всичко работи правилно 🚀",
    });

    console.log("📨 Имейл изпратен:", info.messageId);
  } catch (err) {
    console.error("❌ Имейл грешка:", err);
  }
}

sendTestEmail();
