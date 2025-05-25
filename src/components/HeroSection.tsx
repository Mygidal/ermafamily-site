
'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function HeroSection() {
  const pathname = usePathname();

  const lang = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/de')
    ? 'de'
    : 'bg';

  const text = {
    bg: {
      h1_1: 'Строим дома, в който',
      h1_2: 'мечтаеш да се прибереш.',
      p: 'Строителство с български екип и сърце.',
    },
    en: {
      h1_1: 'We build the home you',
      h1_2: 'dream to return to.',
      p: 'Construction with a Bulgarian team and heart.',
    },
    de: {
      h1_1: 'Wir bauen das Zuhause, ',
      h1_2: 'in das du gerne zurückkehrst.',
      p: 'Bau mit bulgarischem Team und Herz.',
    },
  };

  const layout = {
    bg: {
      h1_1: 'top-[50px] left-[260px]',
      h1_2: 'top-[120px] left-[410px]',
      p: 'top-[240px] left-[680px]',
    },
    en: {
      h1_1: 'top-[50px] left-[250px]',
      h1_2: 'top-[120px] left-[550px]',
      p: 'top-[240px] left-[700px]',
    },
    de: {
      h1_1: 'top-[50px] left-[340px]',
      h1_2: 'top-[110px] left-[520px]',
      p: 'top-[240px] left-[750px]',
    },
  };

  const t = text[lang];
  const pos = layout[lang];

  return (
    <section className="w-full text-blue-900 pt-[80px]">
      {/* === МОБИЛЕН + ТАБЛЕТ === */}
      <div className="flex flex-col gap-6 px-4 2xl:hidden max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center gap-[2px]">
          <h1 className="text-[20px] font-normal font-heading text-black leading-[1.2]">
            {t.h1_1}
          </h1>
          <h1 className="text-[20px] font-normal font-heading text-black leading-[1.2] mt-[-2px]">
            {t.h1_2}
          </h1>
          <p className="text-[16px] font-normal font-heading text-black leading-tight pt-1">
            {t.p}
          </p>
        </div>

        <Image src="/photo-right.png" alt="Right building" width={800} height={600} className="rounded-xl object-cover w-full" />
        <Image src="/photo-left.png" alt="Left building" width={800} height={600} className="rounded-xl object-cover w-full" />
        <Image src="/photo-maika.png" alt="Woman with plans" width={800} height={600} className="rounded-xl object-cover w-full mb-6" />
      </div>

      {/* === ДЕСКТОП === */}
      <div className="hidden 2xl:block relative w-full max-w-[1600px] mx-auto h-[1100px]">
        <h1 className={`absolute ${pos.h1_1} w-[1200px] text-6xl font-normal font-heading text-black leading-none`}>
          {t.h1_1}
        </h1>
        <h1 className={`absolute ${pos.h1_2} w-[1400px] text-6xl font-normal font-heading text-black leading-none`}>
          {t.h1_2}
        </h1>
        <p className={`absolute ${pos.p} w-[1000px] text-4xl font-normal font-heading text-black leading-tight whitespace-nowrap`}>
          {t.p}
        </p>

        <Image src="/photo-right.png" alt="Building left" width={600} height={400} className="absolute top-[280px] left-[0px] rounded-xl object-cover" />
        <Image src="/photo-left.png" alt="Building right" width={600} height={400} className="absolute top-[380px] left-[1000px] rounded-xl object-cover" />
        <Image src="/badge-1994.svg" alt="1994" width={300} height={300} className="absolute object-contain top-[360px] left-[650px]" />
      </div>
    </section>
  );
}
