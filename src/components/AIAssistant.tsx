"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant({
  lang = "bg",
}: {
  lang?: "bg" | "en" | "de";
}) {
  // ------------------------------
  // Състояния
  // ------------------------------
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        lang === "bg"
          ? "Здравей! Аз съм ERMA AI. С какво мога да помогна?"
          : lang === "en"
            ? "Hello! I'm ERMA AI. How can I assist you?"
            : "Hallo! Ich bin ERMA AI. Wie kann ich helfen?",
    },
  ]);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  // ------------------------------
  // Рефове за автоскрол
  // ------------------------------
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ------------------------------
  // Скрол надолу при ново съобщение
  // ------------------------------
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // ------------------------------
  // Обработка на прикачен файл/снимка
  // ------------------------------
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "file" | "image",
  ) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    // Тук можеш да диференцираш по fileType, ако искаш различна логика
  };

  // ------------------------------
  // Изпращане на въпроса
  // ------------------------------
  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setStatus("sending");

    // Подготвяме данните за заявката
    const formData = new FormData();
    formData.append("question", userMessage.content);
    formData.append("lang", lang);
    if (file) formData.append("attachment", file);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.answer || "🤖 Няма отговор от ERMA AI.",
          },
        ]);
        setStatus("idle");
      } else {
        throw new Error("Грешка при отговора.");
      }
    } catch (err) {
      console.error("❌ Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Възникна грешка при свързване с ERMA AI.",
        },
      ]);
      setStatus("error");
    }
  };

  // ------------------------------
  // JSX – връщане на изглед
  // ------------------------------
  return (
    <div
      className="fixed inset-0 flex flex-col overflow-x-hidden bg-white"
      style={{
        // Доп. защита срещу хоризонтален scroll
        maxWidth: "100vw",
      }}
    >
      {/* Заглавна лента */}
      <div className="flex-shrink-0 border-b bg-white p-3 text-center shadow-sm">
        <h1 className="text-lg font-semibold text-blue-700">
          {lang === "bg" && "ERMA AI Чат"}
          {lang === "en" && "ERMA AI Chat"}
          {lang === "de" && "ERMA AI Chat"}
        </h1>
      </div>

      {/* Чат зона (съобщения) */}
      <div
        ref={chatContainerRef}
        className="w-full flex-1 overflow-y-auto break-words bg-gray-50 p-3"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"} `}
          >
            <div
              className={`max-w-[80%] break-words rounded-xl px-4 py-2 shadow ${
                msg.role === "user"
                  ? "bg-blue-100 text-right text-blue-900"
                  : "bg-white text-gray-800"
              } `}
            >
              <p className="mb-1 text-xs font-bold">
                {msg.role === "user"
                  ? lang === "bg"
                    ? "Вие:"
                    : lang === "de"
                      ? "Du:"
                      : "You:"
                  : "ERMA AI:"}
              </p>
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Форма за въвеждане (инпут, икони за прикачване, бутон) */}
      <div className="flex-shrink-0 border-t bg-white p-3 shadow-inner">
        <form onSubmit={handleAsk} className="flex items-center space-x-2">
          {/* Иконка: Прикачване на документ (PDF, DOCX и т.н.) */}
          <label
            htmlFor="attachFile"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            title={
              lang === "bg"
                ? "Прикачи документ"
                : lang === "de"
                  ? "Dokument anhängen"
                  : "Attach file"
            }
          >
            {/* Paperclip Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a4 4 0 10-5.656-5.656L4.344 9.929"
              />
            </svg>
          </label>
          <input
            id="attachFile"
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={(e) => handleFileChange(e, "file")}
          />

          {/* Иконка: Прикачване на изображение (JPG, PNG) */}
          <label
            htmlFor="attachImage"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            title={
              lang === "bg"
                ? "Прикачи снимка"
                : lang === "de"
                  ? "Bild anhängen"
                  : "Attach image"
            }
          >
            {/* Image Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 8v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4"
              />
            </svg>
          </label>
          <input
            id="attachImage"
            type="file"
            accept=".jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => handleFileChange(e, "image")}
          />

          {/* Текстово поле */}
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={1}
            placeholder={
              lang === "bg"
                ? "Напиши съобщение..."
                : lang === "de"
                  ? "Nachricht schreiben..."
                  : "Type a message..."
            }
            className="flex-1 resize-none rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          {/* Бутон за изпращане */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
            title={
              lang === "bg" ? "Изпрати" : lang === "de" ? "Senden" : "Send"
            }
          >
            {status === "sending" ? (
              // По желание може да има loader/spinner
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              // Paper plane Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l11-6 7 18-11-6-4 5z"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
