'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLabels = {
  bg: {
    about: 'ЗА НАС',
    team: 'НАШИЯТ ЕКИП',
    services: 'УСЛУГИ',
    pricing: 'ЦЕНИ',
    gallery: 'ГАЛЕРИЯ',
    contact: 'КОНТАКТИ',
  },
  en: {
    about: 'ABOUT',
    team: 'OUR TEAM',
    services: 'SERVICES',
    pricing: 'PRICING',
    gallery: 'GALLERY',
    contact: 'CONTACT',
  },
  de: {
    about: 'ÜBER UNS',
    team: 'TEAM',
    services: 'LEISTUNGEN',
    pricing: 'PREISE',
    gallery: 'GALERIE',
    contact: 'KONTAKT',
  }
};

const navLinks = [
  { key: 'about', path: '/about' },
  { key: 'team', path: '/team' },
  { key: 'services', path: '/services' },
  { key: 'pricing', path: '/pricing' },
  { key: 'gallery', path: '/gallery' },
  { key: 'contact', path: '/contact' },
];

const languages = [
  { code: 'bg', label: 'BG' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/de')
    ? 'de'
    : 'bg';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[54px] md:h-[80px] bg-[#f4f1ec] z-50 border-b border-blue-100">
      {/* === МОБИЛЕН ХЕДЪР === */}
      <div className="w-full flex items-center justify-between h-full px-4 lg:hidden relative">
        <img
          src="/badge-1994-cleaned.svg"
          alt="1994"
          className="h-[38px] w-auto object-contain translate-y-[-2px] mr-[8px] z-10"
        />
        <Link
          href="/"
          aria-label="Home"
          className="absolute left-1/2 transform -translate-x-1/2 z-0"
        >
          <img
            src="/ЕРМА ФАМИЛНА.png"
            alt="ЕРМА"
            className="h-[30px] w-auto object-contain translate-y-[1px]"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-2 shrink-0 ml-auto z-10">
          <div className="relative shrink-0" ref={langRef}>
            <button onClick={() => setLangOpen(!langOpen)} aria-label="Език">
              <Image src={`/flag-${currentLang}.png`} alt={currentLang.toUpperCase()} width={24} height={24} />
            </button>
            {langOpen && (
              <div className="absolute top-[40px] right-0 bg-white shadow-md rounded-lg p-2 flex flex-col gap-2 items-center z-[999] min-w-[50px]">
                {languages
                  .filter(({ code }) => code !== currentLang)
                  .map(({ code, label }) => (
                    <Link key={code} href={code === 'bg' ? '/' : `/${code}`} onClick={() => setLangOpen(false)}>
                      <Image src={`/flag-${code}.png`} alt={label} width={24} height={24} />
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <div className="relative shrink-0" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute top-[50px] right-0 w-[90vw] bg-white border border-blue-100 shadow-md z-[999] px-4 py-4 rounded-xl">
                <ul className="flex flex-col gap-3">
                  {navLinks.map(({ key, path }) => {
                    const href = currentLang === 'bg' ? path : `/${currentLang}${path}`;
                    return (
                      <li key={path}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="block border border-blue-900 px-4 py-2 rounded-full text-center text-sm font-medium"
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
      <div className="hidden lg:flex w-full max-w-[1280px] mx-auto items-center justify-between px-4 h-full">
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
          <div className="flex gap-2 ml-10">
            <Link
              href="https://www.facebook.com/profile.php?id=61564031771496"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image src="/icon-facebook.png" alt="Facebook" width={28} height={28} className="w-7 h-7" />
            </Link>
            <Link
              href="https://www.instagram.com/erma.familna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icon-instagram.png" alt="Instagram" width={28} height={28} className="w-7 h-7" />
            </Link>
          </div>
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="flex gap-3 md:gap-4 mx-auto">
          {navLinks.map(({ key, path }) => {
            const href = currentLang === 'bg' ? path : `/${currentLang}${path}`;
            return (
              <Link
                key={path}
                href={href}
                className="min-w-[90px] border border-blue-900 px-3 py-1 rounded-full text-center text-sm"
              >
                {t[key as keyof typeof t]}
              </Link>
            );
          })}
        </nav>

        {/* ЕЗИЦИ ВДЯСНО */}
        <div className="flex items-center gap-[6px]">
          {languages.map(({ code, label }) => (
            <Link key={code} href={code === 'bg' ? '/' : `/${code}`}>
              <Image
                src={`/flag-${code}.png`}
                alt={label}
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
