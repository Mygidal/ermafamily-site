"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const pathname = usePathname();

  const lang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/de")
      ? "de"
      : "bg";

  const text = {
    bg: {
      h1_1: "Строим дома, в който",
      h1_2: "мечтаеш да се прибереш.",
      p: "Строителство с български екип и сърце.",
    },
    en: {
      h1_1: "We build the home you",
      h1_2: "dream to return to.",
      p: "Construction with a Bulgarian team and heart.",
    },
    de: {
      h1_1: "Wir bauen das Zuhause, ",
      h1_2: "in das du gerne zurückkehrst.",
      p: "Bau mit bulgarischem Team und Herz.",
    },
  };

  const layout = {
    bg: {
      h1_1: "top-[50px] left-[260px]",
      h1_2: "top-[120px] left-[410px]",
      p: "top-[240px] left-[680px]",
    },
    en: {
      h1_1: "top-[50px] left-[250px]",
      h1_2: "top-[120px] left-[550px]",
      p: "top-[240px] left-[700px]",
    },
    de: {
      h1_1: "top-[50px] left-[340px]",
      h1_2: "top-[110px] left-[520px]",
      p: "top-[240px] left-[750px]",
    },
  };

  const t = text[lang];
  const pos = layout[lang];

  return (
    <section className="w-full pt-[80px] text-blue-900">
      {/* === МОБИЛЕН + ТАБЛЕТ === */}
      <div className="mx-auto flex max-w-[100vw] flex-col gap-4 overflow-x-hidden px-4 2xl:hidden">
        <div className="flex flex-col items-center gap-[2px] text-center">
          <h1 className="font-heading text-[20px] font-normal leading-[1.2] text-black sm:text-[24px]">
            {t.h1_1}
          </h1>
          <h1 className="mt-[-2px] font-heading text-[20px] font-normal leading-[1.2] text-black sm:text-[24px]">
            {t.h1_2}
          </h1>
          <p className="pt-1 font-heading text-[14px] font-normal leading-tight text-black sm:text-[16px]">
            {t.p}
          </p>
        </div>

        <Image
          src="/photo-right.png"
          alt="Right building"
          width={800}
          height={600}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <Image
          src="/photo-left.png"
          alt="Left building"
          width={800}
          height={600}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <Image
          src="/photo-maika.png"
          alt="Woman with plans"
          width={800}
          height={600}
          className="mb-6 aspect-[4/3] w-full rounded-xl object-cover"
        />
      </div>

      {/* === ДЕСКТОП === */}
      <div className="relative mx-auto hidden h-[1100px] w-full max-w-[1600px] 2xl:block">
        <h1
          className={`absolute ${pos.h1_1} w-[1200px] font-heading text-6xl font-normal leading-none text-black`}
        >
          {t.h1_1}
        </h1>
        <h1
          className={`absolute ${pos.h1_2} w-[1400px] font-heading text-6xl font-normal leading-none text-black`}
        >
          {t.h1_2}
        </h1>
        <p
          className={`absolute ${pos.p} w-[1000px] whitespace-nowrap font-heading text-4xl font-normal leading-tight text-black`}
        >
          {t.p}
        </p>

        <Image
          src="/photo-right.png"
          alt="Building left"
          width={600}
          height={400}
          className="absolute left-0 top-[280px] rounded-xl object-cover"
        />
        <Image
          src="/photo-left.png"
          alt="Building right"
          width={600}
          height={400}
          className="absolute left-[1000px] top-[380px] rounded-xl object-cover"
        />
        <Image
          src="/badge-1994.svg"
          alt="1994"
          width={300}
          height={300}
          className="absolute left-[650px] top-[360px] object-contain"
        />
      </div>
    </section>
  );
}
