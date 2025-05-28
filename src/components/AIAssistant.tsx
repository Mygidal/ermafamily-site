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
    <div
      className="box-border flex h-full w-full max-w-full flex-col overflow-x-hidden px-2 sm:mx-auto sm:max-w-[500px]"
      style={{
        // mobile fix: prevent horizontal overflow always
        maxWidth: "100vw",
      }}
    >
      <h2 className="mb-2 text-center text-xl font-semibold text-blue-900">
        {lang === "bg" && "Питай ERMA AI за проекта си"}
        {lang === "en" && "Ask ERMA AI about your project"}
        {lang === "de" && "Frage ERMA AI zu deinem Projekt"}
      </h2>

      {/* Scrollable Chat Box */}
      <div className="mb-2 w-full max-w-full flex-1 overflow-x-hidden">
        <div
          ref={chatContainerRef}
          className="box-border h-[300px] max-h-[50vh] w-full max-w-full space-y-2 overflow-y-auto overflow-x-hidden scroll-smooth rounded border bg-gray-50 p-2"
          style={{
            maxWidth: "100vw",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } max-w-full overflow-x-hidden`}
            >
              <div
                className={`box-border max-w-[75%] overflow-x-hidden rounded-lg px-3 py-1 text-sm ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right text-blue-900"
                    : "bg-gray-100 text-gray-900"
                } `}
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
                <p className="overflow-wrap anywhere whitespace-normal break-words">
                  {msg.content}
                </p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-full overflow-x-hidden">
        <form onSubmit={handleAsk} className="flex flex-col gap-2">
          <input
            type="file"
            name="attachment"
            accept=".pdf,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded border p-1 text-sm"
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
            rows={2}
            className="w-full rounded border p-2 text-sm"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="animate-pulse rounded bg-gradient-to-r from-blue-300 to-blue-400 px-4 py-2 text-white shadow-lg hover:from-blue-400 hover:to-blue-500"
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
    </div>
  );
}
