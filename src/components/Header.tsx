"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLabels = {
  bg: {
    about: "ЗА НАС",
    team: "НАШИЯТ ЕКИП",
    services: "УСЛУГИ",
    pricing: "ЦЕНИ",
    gallery: "ГАЛЕРИЯ",
    contact: "КОНТАКТИ",
  },
  en: {
    about: "ABOUT",
    team: "OUR TEAM",
    services: "SERVICES",
    pricing: "PRICING",
    gallery: "GALLERY",
    contact: "CONTACT",
  },
  de: {
    about: "ÜBER UNS",
    team: "TEAM",
    services: "LEISTUNGEN",
    pricing: "PREISE",
    gallery: "GALERIE",
    contact: "KONTAKT",
  },
};

const navLinks = [
  { key: "about", path: "/about" },
  { key: "team", path: "/team" },
  { key: "services", path: "/services" },
  { key: "pricing", path: "/pricing" },
  { key: "gallery", path: "/gallery" },
  { key: "contact", path: "/contact" },
];

const languages = [
  { code: "bg", label: "BG" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

interface Message {
  role: "user" | "assistant";
  content: string;
  files?: { name: string; url: string }[];
  preview?: boolean;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<
    { name: string; url: string }[]
  >([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Здравей! Аз съм ERMA AI. С какво мога да помогна?",
    },
  ]);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/de")
      ? "de"
      : "bg";

  const t = navLabels[currentLang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setChatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (messages.length > 1 && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [message]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray);

    const previews = fileArray.map((file) => {
      return new Promise<{ name: string; url: string }>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            name: file.name,
            url: typeof reader.result === "string" ? reader.result : "",
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then((filePreviews) => {
      setFilePreviews(filePreviews);
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: message || "",
          files: filePreviews,
          preview: true,
        },
      ]);
    });
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && files.length === 0) return;

    setMessages((prev) => prev.filter((msg) => !msg.preview));

    const userMessage: Message = {
      role: "user",
      content: message,
      files: filePreviews,
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setFiles([]);
    setFilePreviews([]);
    setStatus("sending");

    const formData = new FormData();
    formData.append("question", userMessage.content);
    formData.append("lang", currentLang);
    files.forEach((file) => formData.append("attachment", file));

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
            files: data.files || [],
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
    <header className="fixed left-0 top-0 z-50 h-[54px] w-full border-b border-blue-100 bg-[#f4f1ec] md:h-[80px]">
      <div className="relative flex size-full items-center justify-between px-4 lg:hidden">
        <img
          src="/badge-1994-cleaned.svg"
          alt="1994"
          className="z-10 mr-[8px] h-[38px] w-auto translate-y-[-2px] object-contain"
        />
        <Link
          href="/"
          aria-label="Home"
          className="absolute left-1/2 z-0 -translate-x-1/2"
        >
          <Image
            src="/logo-erma-header.png"
            alt="ЕРМА"
            width={120}
            height={30}
            className="h-[30px] w-auto translate-y-px object-contain"
          />
        </Link>

        <div className="z-10 ml-auto flex shrink-0 flex-wrap items-center gap-2">
          <div className="relative shrink-0" ref={langRef}>
            <button onClick={() => setLangOpen(!langOpen)} aria-label="Език">
              <Image
                src={`/flag-${currentLang}.png`}
                alt={currentLang.toUpperCase()}
                width={24}
                height={24}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-[40px] z-[999] flex min-w-[50px] flex-col items-center gap-2 rounded-lg bg-white p-2 shadow-md">
                {languages
                  .filter(({ code }) => code !== currentLang)
                  .map(({ code, label }) => (
                    <Link
                      key={code}
                      href={code === "bg" ? "/" : `/${code}`}
                      onClick={() => setLangOpen(false)}
                    >
                      <Image
                        src={`/flag-${code}.png`}
                        alt={label}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <div className="relative shrink-0" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
              <svg
                className="size-7 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-[50px] z-[999] w-[90vw] rounded-xl border border-blue-100 bg-white p-4 shadow-md">
                <ul className="flex flex-col gap-3">
                  {navLinks.map(({ key, path }) => {
                    const href =
                      currentLang === "bg" ? path : `/${currentLang}${path}`;
                    return (
                      <li key={path}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-full border border-blue-900 px-4 py-2 text-center text-sm font-medium"
                        >
                          {t[key as keyof typeof t]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto hidden size-full max-w-screen-xl items-center justify-between px-4 lg:flex">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Home" className="ml-[-100px]">
            <Image
              src="/logo-erma.png"
              alt="ЕРМА"
              width={140}
              height={48}
              className="h-[68px] w-auto object-contain"
              priority
            />
          </Link>
          <div className="ml-10 flex gap-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61564031771496"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image
                src="/icon-facebook.png"
                alt="Facebook"
                width={28}
                height={28}
                className="size-7"
              />
            </Link>
            <Link
              href="https://www.instagram.com/erma.familna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/icon-instagram.png"
                alt="Instagram"
                width={28}
                height={28}
                className="size-7"
              />
            </Link>
          </div>
        </div>
        <nav className="mx-auto flex gap-6 md:gap-8">
          {navLinks.map(({ key, path }) => {
            const href = currentLang === "bg" ? path : `/${currentLang}${path}`;
            return (
              <Link
                key={path}
                href={href}
                className="min-w-[90px] rounded-full border border-blue-900 px-3 py-1 text-center text-sm"
              >
                {t[key as keyof typeof t]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-[6px]">
          {languages.map(({ code, label }) => (
            <Link key={code} href={code === "bg" ? "/" : `/${code}`}>
              <Image
                src={`/flag-${code}.png`}
                alt={label}
                width={24}
                height={24}
                className="size-[24px]"
              />
            </Link>
          ))}

          <div className="relative ml-4" ref={chatRef}>
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="flex size-10 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-[10px] text-white shadow-lg hover:from-blue-400 hover:to-blue-500"
            >
              ERMA AI
            </button>
            {chatOpen && (
              <div className="absolute right-0 top-[50px] z-[999] w-[90vw] max-w-[400px] rounded-xl border border-blue-100 bg-white p-4 shadow-md">
                <div className="mb-4 flex items-center justify-between border-b p-2 shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {currentLang === "bg" && "Питай ERMA AI за проекта си"}
                    {currentLang === "en" && "Ask ERMA AI about your project"}
                    {currentLang === "de" && "Frage ERMA AI zu deinem Projekt"}
                  </h3>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-sm text-gray-500 underline"
                  >
                    ✕{" "}
                    {currentLang === "bg"
                      ? "Затвори"
                      : currentLang === "en"
                        ? "Close"
                        : "Schließen"}
                  </button>
                </div>
                <div className="mb-4">
                  <div
                    ref={chatContainerRef}
                    className="chat-container-wrapper h-[300px] space-y-3 overflow-y-auto scroll-smooth rounded border bg-gray-50 p-3 pr-2"
                  >
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex w-full ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`chat-message rounded-lg px-4 py-2 text-sm ${
                            msg.role === "user"
                              ? "bg-blue-100 text-right text-blue-900"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="mb-1 font-bold">
                            {msg.role === "user"
                              ? currentLang === "bg"
                                ? "Вие:"
                                : currentLang === "en"
                                  ? "You:"
                                  : "Du:"
                              : "ERMA AI:"}
                          </p>
                          <p>{msg.content}</p>
                          {msg.files && msg.files.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {msg.files.map((file, fileIdx) => (
                                <div key={fileIdx}>
                                  {file.name.match(/\.(jpg|jpeg|png)$/i) ? (
                                    <img
                                      src={file.url}
                                      alt={file.name}
                                      className="rounded-lg"
                                    />
                                  ) : (
                                    <a
                                      href={file.url}
                                      download={file.name}
                                      className="text-sm text-blue-600 underline hover:text-blue-800"
                                    >
                                      {file.name}
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {msg.preview && (
                            <span className="mt-1 block text-xs text-yellow-400">
                              (Преглед, не е изпратен)
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    {status === "sending" && (
                      <div className="flex justify-start">
                        <div className="chat-message rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-900">
                          {currentLang === "bg"
                            ? "Мисли..."
                            : currentLang === "en"
                              ? "Thinking..."
                              : "Denkt nach..."}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <form
                  onSubmit={handleMessageSubmit}
                  className="flex flex-col gap-2"
                >
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="w-full rounded border p-2 text-sm"
                    multiple
                  />
                  <div className="flex items-center gap-2">
                    <textarea
                      ref={textareaRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        currentLang === "bg"
                          ? "Задай въпрос или опиши проекта си..."
                          : currentLang === "en"
                            ? "Ask a question or describe your project..."
                            : "Stelle eine Frage oder beschreibe dein Projekt..."
                      }
                      className="chat-textarea w-full border border-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      disabled={status === "sending"}
                    />
                    <button
                      type="submit"
                      className="animate-pulse rounded-full bg-gradient-to-r from-blue-300 to-blue-400 p-3 text-white shadow-lg hover:from-blue-400 hover:to-blue-500"
                      disabled={status === "sending"}
                    >
                      <svg
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span className="sr-only">
                        {currentLang === "bg"
                          ? "Изпрати"
                          : currentLang === "en"
                            ? "Send"
                            : "Senden"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
