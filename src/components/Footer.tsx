"use client";

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
    privacy: "ПОВЕРИТЕЛНОСТ",
    terms: "ОБЩИ УСЛОВИЯ",
    rights: "Всички права запазени.",
    address: "София, кв. „Овча купел“, ул. 692, №12",
  },
  en: {
    about: "ABOUT",
    team: "OUR TEAM",
    services: "SERVICES",
    pricing: "PRICING",
    gallery: "GALLERY",
    contact: "CONTACT",
    privacy: "PRIVACY",
    terms: "TERMS",
    rights: "All rights reserved.",
    address: "Sofia, Ovcha Kupel District, 692nd Street, №12",
  },
  de: {
    about: "ÜBER UNS",
    team: "TEAM",
    services: "LEISTUNGEN",
    pricing: "PREISE",
    gallery: "GALERIE",
    contact: "KONTAKT",
    privacy: "DATENSCHUTZ",
    terms: "AGB",
    rights: "Alle Rechte vorbehalten.",
    address: "Sofia, Stadtteil Ovcha Kupel, Straße 692, Nr. 12",
  },
};

const navOrder = [
  "",
  "team",
  "services",
  "pricing",
  "gallery",
  "contact",
  "privacy",
  "terms",
];

export default function Footer() {
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/de")
      ? "de"
      : "bg";

  const t = navLabels[currentLang];

  const href = (path: string) =>
    currentLang === "bg" ? `/${path}` : `/${currentLang}/${path}`;

  return (
    <>
      {/* === МОБИЛЕН + ТАБЛЕТ ФУТЪР === */}
      <footer
        style={{ backgroundColor: "#f4f1ec" }}
        className="flex w-full flex-col items-center gap-3 p-4 text-center font-sans text-xs font-normal text-black 2xl:hidden"
      >
        {/* Социални икони */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61564031771496"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image
              src="/icon-facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="size-6"
            />
          </a>
          <a
            href="https://www.instagram.com/erma.familna/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/icon-instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="size-6"
            />
          </a>
        </div>

        {/* Навигация (показва се само на мобилни!) */}
        <div className="flex flex-wrap justify-center gap-2 text-[10px]">
          {navOrder.map((key) => (
            <Link key={key} href={href(key)} className="underline">
              {t[key as keyof typeof t]}
            </Link>
          ))}
        </div>

        {/* Адрес */}
        <a
          href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px]"
        >
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="size-[16px] object-contain"
          />
          <span>{t.address}</span>
        </a>

        {/* Права */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. {t.rights}
        </div>
      </footer>

      {/* === ДЕСКТОП ФУТЪР === */}
      <footer className="relative hidden h-10 w-full items-center justify-between bg-stone-300 px-4 py-2 font-sans text-[10px] font-normal text-black 2xl:flex">
        {/* Лява част: права */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. {t.rights}
        </div>

        {/* Център: НАВИГАЦИЯ С РАБОТЕЩИ ЛИНКОВЕ */}
        <div className="flex flex-wrap gap-3">
          {navOrder.map((key) => (
            <Link key={key} href={href(key)}>
              {t[key as keyof typeof t]}
            </Link>
          ))}
        </div>

        {/* Дясна част: адрес */}
        <a
          href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="size-[16px] object-contain"
          />
          <span>{t.address}</span>
        </a>
      </footer>
    </>
  );
}
