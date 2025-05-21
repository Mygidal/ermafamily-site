'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* === МОБИЛЕН + ТАБЛЕТ ФУТЪР === */}
      <footer
   style={{ backgroundColor: '#f4f1ec' }}  // 👈 завършва тук
  className="flex 2xl:hidden flex-col items-center gap-3 text-black text-xs font-normal font-sans w-full px-4 py-4 text-center"
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
              className="w-6 h-6"
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
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Адрес */}
        <a
          href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София/@42.6777594,23.2508653,799m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40aa9b2fe0506391:0x58036b9c19288a11!8m2!3d42.6777556!4d23.2557362"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px]"
        >
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="w-[16px] h-[16px] object-contain"
          />
          <span>София, кв. „Овча купел“, ул. 692, №12</span>
        </a>

        {/* Права */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. Всички права запазени.
        </div>
      </footer>

      {/* === ДЕСКТОП ФУТЪР === */}
      <footer className="hidden 2xl:flex relative bg-stone-300 text-black font-normal font-sans w-full h-10 items-center justify-between px-4 py-2 text-[10px]">

        {/* Лява част: права */}
        <div className="text-[8px] leading-none">
          © {new Date().getFullYear()} ЕРМА – ФАМИЛНА ООД. Всички права запазени.
        </div>

        {/* Център: НАВИГАЦИЯ С РАБОТЕЩИ ЛИНКОВЕ */}
        <div className="flex flex-wrap gap-3">
          <Link href="/about">ЗА НАС</Link>
          <Link href="/team">НАШИЯТ ЕКИП</Link>
          <Link href="/services">УСЛУГИ</Link>
          <Link href="/pricing">ЦЕНИ</Link>
          <Link href="/gallery">ГАЛЕРИЯ</Link>
          <Link href="/contact">КОНТАКТИ</Link>
          <Link href="/privacy">ПОВЕРИТЕЛНОСТ</Link>
          <Link href="/terms">ОБЩИ УСЛОВИЯ</Link>
        </div>

        {/* Дясна част: адрес с Google Maps линк */}
        <a
          href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София/@42.6777594,23.2508653,799m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40aa9b2fe0506391:0x58036b9c19288a11!8m2!3d42.6777556!4d23.2557362"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Image
            src="/icon-location.png"
            alt="Локация"
            width={16}
            height={16}
            className="w-[16px] h-[16px] object-contain"
          />
          <span>София, кв. „Овча купел“, ул. 692, №12</span>
        </a>
      </footer>
    </>
  );
}
