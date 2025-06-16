import { ermaKnowledgeBase } from "../../../data/ermaKnowledgeBase";

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

${ermaKnowledgeBase}
`.trim();

  try {
    const parts = [
      { text: fullPrompt },
      {
        text: contextText || "Отговаряй на български, кратко и професионално.",
      },
      { text: `Въпрос: ${prompt}` },
    ];

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

    if (!res.ok) {
      console.error("❌ Грешка от Gemini API:", res.status);
      return "Грешка при връзката с AI.";
    }

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
