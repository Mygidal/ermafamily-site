"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant({
  lang = "bg",
}: {
  lang?: "bg" | "en" | "de";
}) {
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

  const router = useRouter();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Автоскрол надолу при всяко ново съобщение
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Динамично регулиране на височината на textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Нулираме височината
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`; // Ограничаваме до 120px
    }
  }, [question]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setStatus("sending");

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

  return (
    <div className="fixed inset-0 flex flex-col overflow-x-hidden bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="flex h-full w-full max-w-[100vw] flex-col rounded-none border border-gray-200 bg-white shadow-xl">
        {/* Заглавие с бутон X */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-center text-lg font-semibold text-blue-900">
            {lang === "bg" && "Питай ERMA AI за проекта си"}
            {lang === "en" && "Ask ERMA AI about your project"}
            {lang === "de" && "Frage ERMA AI zu deinem Projekt"}
          </h2>
          <button
            onClick={() => router.push("/")}
            className="text-gray-500 transition-colors hover:text-gray-700"
            aria-label={
              lang === "bg"
                ? "Затвори чата"
                : lang === "de"
                  ? "Chat schließen"
                  : "Close chat"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Чат съобщения */}
        <div
          ref={chatContainerRef}
          className="flex-1 space-y-4 overflow-y-auto bg-gray-50 px-4 py-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] break-words rounded-xl px-4 py-2 text-base shadow-sm ${
                  msg.role === "user"
                    ? "rounded-br-none bg-blue-500 text-white"
                    : "rounded-bl-none bg-gray-200 text-gray-900"
                } `}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Форма за изпращане на съобщение */}
        <form
          onSubmit={handleAsk}
          className="flex items-center gap-2 rounded-b-2xl border-t bg-white px-4 py-3"
        >
          <input
            type="file"
            accept=".pdf,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="attachFile"
          />
          <label
            htmlFor="attachFile"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            title={
              lang === "bg"
                ? "Прикачи файл"
                : lang === "de"
                  ? "Datei anhängen"
                  : "Attach file"
            }
          >
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

          <textarea
            ref={textareaRef}
            placeholder={
              lang === "bg"
                ? "Задай въпрос или опиши проекта си..."
                : lang === "de"
                  ? "Stelle eine Frage oder beschreibe dein Projekt..."
                  : "Ask a question or describe your project..."
            }
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={1}
            className="flex-1 resize-none rounded-full border border-gray-300 px-4 py-1 text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{
              minHeight: "40px",
              maxHeight: "120px",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            disabled={status === "sending" || !question.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow transition-colors hover:bg-blue-600 disabled:opacity-50"
          >
            {status === "sending" ? (
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
