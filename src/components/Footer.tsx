'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* === Десктоп футър (НЕПИПАН) === */}
      <footer className="hidden md:flex relative bg-stone-300 text-black  font-normal font-sans w-full h-10 items-center justify-between px-4 py-2 text-[10px]">
        {/* === Лява част: права === */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. Всички права запазени.
        </div>

        {/* === Център: навигация === */}
        <div className="flex flex-wrap gap-3">
          <Link href="#about">ЗА НАС</Link>
          <Link href="#team">НАШИЯТ ЕКИП</Link>
          <Link href="#services">УСЛУГИ</Link>
          <Link href="#prices">ЦЕНИ</Link>
          <Link href="#gallery">ГАЛЕРИЯ</Link>
          <Link href="#contact">КОНТАКТИ</Link>
          <Link href="#privacy">ПОВЕРИТЕЛНОСТ</Link>
          <Link href="#terms">ОБЩИ УСЛОВИЯ</Link>
        </div>

        {/* === Дясна част: адрес + икона === */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="w-[16px] h-[16px] object-contain"
          />
          <span>София, кв. „Овча купел“, ул. 692, №12</span>
        </div>
      </footer>

      {/* === Мобилен футър (само при md:hidden) === */}
      <footer className="flex md:hidden flex-col items-center gap-2 bg-stone-300 text-black text-xs font-normal font-sans w-full px-4 py-4 text-center">
        {/* Адрес */}
        <div className="flex items-center gap-2 text-[10px]">
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="w-[16px] h-[16px] object-contain"
          />
          <span>София, кв. „Овча купел“, ул. 692, №12</span>
        </div>

        {/* Права */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. Всички права запазени.
        </div>
      </footer>
    </>
  );
}
