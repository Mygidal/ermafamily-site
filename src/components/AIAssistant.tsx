"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Типове

type Attachment = { file: File; preview: string };
type ChatFile = { name: string; url: string };
type Message = {
  role: "user" | "assistant";
  content: string;
  files?: ChatFile[];
};

export default function AIAssistant({
  lang = "bg",
}: {
  lang?: "bg" | "en" | "de";
}) {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
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

  // Скрол до последно съобщение
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Автоматичен размер на текстовото поле
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [question]);

  // Добавяне на файлове
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const mapped = files.map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
    }));
    setAttachments((prev) => [...prev, ...mapped]);
    e.target.value = "";
  };

  const removeAttachment = (idx: number) => {
    setAttachments((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(idx, 1);
      if (removed) URL.revokeObjectURL(removed.preview);
      return copy;
    });
  };

  // Изпращане на съобщение
  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() && attachments.length === 0) return;

    const currentAttachments = attachments;
    const text = question;

    setQuestion("");
    setAttachments([]);
    setStatus("sending");

    const formData = new FormData();
    formData.append("question", text || "Потребителят качи файл.");
    formData.append("lang", lang);
    currentAttachments.forEach((a) => formData.append("attachment", a.file));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      const userMessage: Message = {
        role: "user",
        content: text,
        files: currentAttachments.map((a) => ({
          name: a.file.name,
          url: a.preview,
        })),
      };

      const newMessages: Message[] = [userMessage];
      newMessages.push({
        role: "assistant",
        content: data.answer || "🤖 Няма отговор от ERMA AI.",
        files: data.file ? [data.file] : undefined,
      });

      setMessages((prev) => [...prev, ...newMessages]);
      setStatus("idle");
    } catch (err) {
      console.error("❌ Chat error:", err);

      const userMessage: Message = {
        role: "user",
        content: text,
        files: currentAttachments.map((a) => ({
          name: a.file.name,
          url: a.preview,
        })),
      };

      setMessages((prev) => [
        ...prev,
        userMessage,
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
        {/* Хедър */}
        <div className="flex items-center border-b px-4 py-3">
          <div className="flex-1 text-center">
            <h2 className="text-lg font-semibold text-blue-900">
              {lang === "bg" && "Консултация с ERMA AI"}
              {lang === "en" && "Consult with ERMA AI"}
              {lang === "de" && "Beratung mit ERMA AI"}
            </h2>
          </div>
          <button
            onClick={() => router.push("/")}
            className="ml-auto text-gray-500 transition-colors hover:text-gray-700"
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

        {/* Съобщения */}
        <div
          ref={chatContainerRef}
          className="flex-1 space-y-4 overflow-y-auto bg-gray-50 px-4 py-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] break-words rounded-xl px-4 py-2 text-base shadow-sm ${
                  msg.role === "user"
                    ? "rounded-br-none bg-blue-500 text-white"
                    : "rounded-bl-none bg-gray-200 text-gray-900"
                }`}
              >
                {msg.content}
                {msg.files && msg.files.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {msg.files.map((f, fIdx) => (
                      <div key={fIdx}>
                        {f.name.match(/\.(jpg|jpeg|png)$/i) ? (
                          <img
                            src={f.url}
                            alt={f.name}
                            className="mt-2 max-w-full rounded-lg"
                            style={{ maxHeight: "200px" }}
                          />
                        ) : (
                          <a
                            href={f.url}
                            download={f.name}
                            className="text-sm text-blue-300 underline hover:text-blue-400"
                          >
                            {f.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Форма за въвеждане */}
        <form
          onSubmit={handleAsk}
          className="flex flex-col gap-2 rounded-b-2xl border-t bg-white px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <input
              type="file"
              multiple
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
                  ? "Съобщение..."
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
              disabled={
                status === "sending" ||
                (!question.trim() && attachments.length === 0)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow transition-colors hover:bg-blue-600 disabled:opacity-50"
            >
              {status === "sending" ? (
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              ) : (
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Визуализация на прикачените */}
          {attachments.length > 0 && (
            <div className="flex max-h-20 items-center gap-2 overflow-x-auto sm:flex-wrap">
              {attachments.map((att, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center rounded border bg-gray-100 px-2 py-1 text-xs"
                >
                  {att.file.name.match(/\.(jpg|jpeg|png)$/i) ? (
                    <img
                      src={att.preview}
                      alt={att.file.name}
                      className="h-8 w-8 rounded object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                  <span className="ml-2 max-w-[6rem] truncate">
                    {att.file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(idx)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
