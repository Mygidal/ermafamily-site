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
    <header className="fixed top-0 left-0 w-full h-[64px] sm:h-[80px]
 bg-[#f4f1ec]/80 backdrop-blur-md z-50 border-b border-blue-100 flex items-center">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 relative">

        {/* === Десктоп лого === */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/" aria-label="Начало">
            <Image
              src="/logo-erma.png"
              alt="ЕРМА"
              width={180}
              height={60}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </Link>
        </div>
        {/* === Икони: Facebook / Instagram – бутонни === */}
        <div className="hidden md:flex gap-2 absolute left-[160px] top-[16px]">
          <button aria-label="Facebook">
            <Image src="/icon-facebook.png" alt="Facebook" width={28} height={28} className="w-7 h-7" />
          </button>
          <button aria-label="Instagram">
            <Image src="/icon-instagram.png" alt="Instagram" width={28} height={28} className="w-7 h-7" />
          </button>
        </div>
{/* === Мобилен хедър съдържание === */}
<div className="absolute sm:hidden w-full flex items-center justify-between px-4 top-0 h-[80px] z-[30]">

  {/* Лого (абсолютно, но визуално вляво) */}
  <img
    src="/logo-erma.png"
    alt="ЕРМА"
    style={{
      position: 'absolute',
      top: '-25px',
      left: '140px',
      width: '60px',
      height: 'auto',
      objectFit: 'contain',
      zIndex: 30,
    }}
  />

  {/* Емблема 1994 (абсолютно, централно или според нужда) */}
  <img
    src="/badge-1994.png"
    alt="1994"
    style={{
      position: 'absolute',
      top: '-63px',
      left: 'calc(50% - 340px)',
      width: '370px',
      height: 'auto',
      objectFit: 'contain',
      zIndex: 30,
    }}
  />

 {/* === Мобилен: Език + Бургер (позиционирани в Header) === */}
<div className="absolute sm:hidden top-[-45px] right-5 h-[64px] flex items-center gap-3 px-4 z-[50]">

 {/* === ЕЗИК БУТОН + ПАДАЩ ПАНЕЛ === */}
<div className="relative mt-[33px]" ref={langRef}>
  <button onClick={() => setLangOpen(!langOpen)} aria-label="Език">
    <Image src="/flag-bg.png" alt="BG" width={28} height={28} />
  </button>

  {langOpen && (
    <div className="absolute top-[40px] right-0 bg-white shadow-md rounded-lg p-2 flex flex-col gap-2 items-center
 z-[999] min-w-[50px]">

      <button aria-label="EN">
        <Image src="/flag-en.png" alt="EN" width={28} height={28} />
      </button>
      <button aria-label="DE">
        <Image src="/flag-de.png" alt="DE" width={28} height={28} />
      </button>
    </div>
  )}
</div>


  {/* Меню бутон */}
  <div className="relative" ref={menuRef}>
    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню"className="mt-[35px]">
      <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {menuOpen && (
  <div className="absolute top-[80px] right-0 w-[90vw] bg-white border border-blue-100 shadow-md z-[999] px-4 py-4 rounded-xl">
    <nav>
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

     
    </nav>
  </div>
)}

  </div>
</div>


</div>


      

        {/* === Десктоп: навигация === */}
        <nav className="hidden md:flex gap-4 mx-auto">
          {navLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="min-w-[100px] border border-blue-900 px-4 py-1 rounded-full text-center text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* === Десктоп: езици (дясно) === */}
        <div className="hidden md:flex items-center gap-[8px]">
          {languages.map(({ code, label }) => (
            <button key={code} aria-label={label}>
              <Image src={`/flag-${code}.png`} alt={label} width={24} height={24} className="w-[24px] h-[24px]" />
            </button>
          ))}
        </div>


       
      </div>
    </header>
  );
}
