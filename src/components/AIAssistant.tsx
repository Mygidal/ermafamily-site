"use client";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
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

  useEffect(() => {
    if (messages.length > 1 && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="mx-auto flex max-w-xl flex-col rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold text-blue-900">
        {lang === "bg" && "Питай ERMA AI за проекта си"}
        {lang === "en" && "Ask ERMA AI about your project"}
        {lang === "de" && "Frage ERMA AI zu deinem Projekt"}
      </h2>

      {/* Scrollable Chat Box */}
      <div className="mb-4">
        <div
          ref={chatContainerRef}
          className="h-[320px] space-y-3 overflow-y-auto scroll-smooth rounded border bg-gray-50 p-3 pr-2"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 text-sm ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right text-blue-900"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="mb-1 font-bold">
                  {msg.role === "user"
                    ? lang === "bg"
                      ? "Вие:"
                      : lang === "de"
                        ? "Du:"
                        : "You:"
                    : "ERMA AI:"}
                </p>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleAsk} className="flex flex-col gap-3">
        <input
          type="file"
          name="attachment"
          accept=".pdf,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="w-full rounded border p-2 text-sm"
        />

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
          rows={3}
          className="w-full rounded border p-2 text-sm"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
        >
          {status === "sending"
            ? lang === "bg"
              ? "Мисли..."
              : lang === "de"
                ? "Denkt nach..."
                : "Thinking..."
            : lang === "bg"
              ? "Попитай ERMA AI"
              : lang === "de"
                ? "Frage ERMA AI"
                : "Ask ERMA AI"}
        </button>
      </form>
    </div>
  );
}
