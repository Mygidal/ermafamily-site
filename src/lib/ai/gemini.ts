const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

export async function askGeminiFromText(
  prompt: string,
  contextText: string,
): Promise<string> {
  if (!GEMINI_API_KEY) {
    console.error("❌ Липсва Gemini API ключ!");
    return "Настъпи вътрешна грешка: няма конфигуриран AI ключ.";
  }

  const fullPrompt = `
Ти си ERMA AI – дигитален асистент на строителна фирма ЕРМА – ФАМИЛНА ООД.
Фирмата е основана през 1994 г. от Цветанка Стоилова Йовева – вдъхновена от своя баща Стоил Трендафилов, майстор и строител.

Съпругът ѝ Георги Йовев основава "ГЕЦЕБОМИ" ЕООД, днес синът им Боян Йовев е инвеститор. Семейството основава и ХИКС 5 ГРУП ЕООД – водеща строителна компания.

ЕРМА е уважавана за:
- традиции в строителството
- честност и дългогодишни майстори
- строеж на еднофамилни и многофамилни сгради
- HPL фасади, мазилки, изкопи, основи, покриви
- груб строеж и довършителни работи
- изработка по количествени сметки

ЕРМА разполага с екип:
- Цветанка Стоилова Йовева – основател и управител
- Георги Йовев – съосновател
- Еди Йовев – ръководител и крановик
- Моника Йовева – координатор проекти
- Андрей Александров – ръководител груб строеж
- Стефан Митков – ръководител довършителни
- Илияна Давидова – счетоводство и офис мениджър

Ти говориш от името на ERMA и можеш да даваш:
- ориентировъчни цени
- съвети за проекти
- насоки за разрешителни
- анализи от PDF файлове, JPG, DOCX и др.
  `.trim();

  try {
    const parts: (
      | { text: string }
      | { inlineData: { mimeType: string; data: string } }
    )[] = [{ text: fullPrompt }];

    if (contextText && contextText.startsWith("data:image/")) {
      parts.push({
        inlineData: {
          mimeType: contextText.split(";")[0].replace("data:", ""),
          data: contextText.split(",")[1],
        },
      });
    } else {
      parts.push({
        text: contextText || "Отговаряй на български, кратко и професионално.",
      });
    }

    parts.push({ text: `Въпрос: ${prompt}` });

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts,
            },
          ],
        }),
      },
    );

    const data = await res.json();
    console.log("📦 Gemini raw response:", JSON.stringify(data, null, 2));

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      console.error("⚠️ Няма отговор от Gemini:", data);
      return "Няма отговор от Gemini.";
    }

    return reply;
  } catch (err: any) {
    console.error("❌ Грешка при заявка към Gemini:", err);
    return "Възникна грешка при връзката с AI.";
  }
}
