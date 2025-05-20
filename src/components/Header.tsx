'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = ['ЗА НАС', 'НАШИЯТ ЕКИП', 'УСЛУГИ', 'ЦЕНИ', 'ГАЛЕРИЯ', 'КОНТАКТИ'];
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
      
      {/* === МОБИЛЕН + ТАБЛЕТ ХЕДЪР === */}
      <div className="w-full flex items-center justify-between h-full px-4 lg:hidden">
        {/* ЛЯВО: емблема */}
        <img
          src="/badge-1994-cleaned.svg"
          alt="1994"
          className="h-[38px] w-auto object-contain translate-y-[-2px] mr-[8px]"
        />

        {/* ЦЕНТЪР: Лого + надпис */}
        <img
          src="/logo-erma-header.svg"
          alt="ЕРМА"
          className="h-[45px] w-auto object-contain translate-y-[1px] ml-[20px]"
        />

        {/* ДЯСНО: език и меню */}
        <div className="flex items-center gap-3">
          {/* Език */}
          <div className="relative" ref={langRef}>
            <button onClick={() => setLangOpen(!langOpen)} aria-label="Език">
              <Image src="/flag-bg.png" alt="BG" width={24} height={24} />
            </button>
            {langOpen && (
              <div className="absolute top-[40px] right-0 bg-white shadow-md rounded-lg p-2 flex flex-col gap-2 items-center z-[999] min-w-[50px]">
                <Image src="/flag-en.png" alt="EN" width={24} height={24} />
                <Image src="/flag-de.png" alt="DE" width={24} height={24} />
              </div>
            )}
          </div>

          {/* Меню */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute top-[50px] right-0 w-[90vw] bg-white border border-blue-100 shadow-md z-[999] px-4 py-4 rounded-xl">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="block border border-blue-900 px-4 py-2 rounded-full text-center text-sm font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === ДЕСКТОП ХЕДЪР === */}
      <div className="hidden lg:flex w-full max-w-[1280px] mx-auto items-center justify-between px-4 h-full">
        {/* ЛОГО + СОЦИАЛНИ */}
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Начало">
            <Image
              src="/logo-erma.png"
              alt="ЕРМА"
              width={140}
              height={48}
              className="h-[48px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Социални бутони */}
          <div className="flex gap-2 ml-6">
            <button aria-label="Facebook">
              <Image src="/icon-facebook.png" alt="Facebook" width={28} height={28} className="w-7 h-7" />
            </button>
            <button aria-label="Instagram">
              <Image src="/icon-instagram.png" alt="Instagram" width={28} height={28} className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="flex gap-3 md:gap-4 mx-auto">
          {navLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="min-w-[90px] border border-blue-900 px-3 py-1 rounded-full text-center text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ЕЗИЦИ */}
        <div className="flex items-center gap-[6px]">
          {languages.map(({ code, label }) => (
            <button key={code} aria-label={label}>
              <Image
                src={`/flag-${code}.png`}
                alt={label}
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
