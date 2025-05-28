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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ question: userMessage.content, lang }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "🤖 Няма отговор от ERMA AI.",
        },
      ]);
      setStatus("idle");
    } catch (err) {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="flex w-full max-w-2xl flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* Заглавие */}
        <div className="border-b px-6 py-4">
          <h2 className="text-center text-xl font-semibold text-blue-900">
            {lang === "bg" && "Питай ERMA AI за проекта си"}
            {lang === "en" && "Ask ERMA AI about your project"}
            {lang === "de" && "Frage ERMA AI zu deinem Projekt"}
          </h2>
        </div>

        {/* Чат съобщения */}
        <div
          ref={chatContainerRef}
          className="flex-1 space-y-4 overflow-y-auto bg-gray-50 px-4 py-6"
          style={{ minHeight: 400, maxHeight: 500 }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2 text-base shadow-sm ${
                  msg.role === "user"
                    ? "rounded-br-none bg-blue-500 text-white"
                    : "rounded-bl-none bg-gray-200 text-gray-900"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Инпут и бутон */}
        <form
          onSubmit={handleAsk}
          className="flex items-center gap-2 border-t bg-white px-4 py-3"
        >
          <textarea
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
            className="flex-1 resize-none rounded border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            disabled={status === "sending"}
          />
          <button
            type="submit"
            disabled={status === "sending" || !question.trim()}
            className="rounded bg-blue-500 px-5 py-2 font-semibold text-white shadow transition-colors hover:bg-blue-600 disabled:opacity-50"
          >
            {status === "sending"
              ? lang === "bg"
                ? "Мисли..."
                : lang === "de"
                  ? "Denkt nach..."
                  : "Thinking..."
              : lang === "bg"
                ? "Изпрати"
                : lang === "de"
                  ? "Senden"
                  : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
