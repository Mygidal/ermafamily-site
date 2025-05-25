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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 h-[54px] w-full border-b border-blue-100 bg-[#f4f1ec] md:h-[80px]">
      {/* === МОБИЛЕН ХЕДЪР === */}
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
          <img
            src="/ЕРМА ФАМИЛНА.png"
            alt="ЕРМА"
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

      {/* === ДЕСКТОП ХЕДЪР === */}
      <div className="mx-auto hidden size-full max-w-screen-xl items-center justify-between px-4 lg:flex">
        {/* ЛОГО + СОЦИАЛКИ ВЛЯВО */}
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

        {/* НАВИГАЦИЯ */}
        <nav className="mx-auto flex gap-3 md:gap-4">
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

        {/* ЕЗИЦИ ВДЯСНО */}
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
        </div>
      </div>
    </header>
  );
}
