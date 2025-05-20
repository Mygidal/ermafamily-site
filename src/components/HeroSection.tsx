
'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full text-blue-900 pt-[80px]">
      {/* === МОБИЛЕН + ТАБЛЕТ === */}
      <div className="flex flex-col gap-6 px-4 2xl:hidden max-w-[1280px] mx-auto">
        {/* Текстов блок */}
        <div className="flex flex-col items-center text-center gap-[2px]">

          <h1 className="text-[20px] font-normal font-heading text-black leading-[1.2]">
            Строим дома, в който
          </h1>
          <h1 className="text-[20px] font-normal font-heading text-black leading-[1.2] mt-[-2px]">
            мечтаеш да се прибереш.
          </h1>
          <p className="text-[16px] font-normal font-heading text-black leading-tight pt-1">
            Строителство с български екип и сърце.
          </p>
        </div>

        {/* Снимки */}
        <Image
          src="/photo-right.png"
          alt="Сграда ляво мобилен"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full"
        />
        <Image
          src="/photo-left.png"
          alt="Сграда дясно мобилен"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full"
        />
        <Image
          src="/photo-maika.png"
          alt="Жена с чертежи"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full mb-6"
        />
      </div>

      {/* === ДЕСКТОП (от 1280px) === */}
      <div className="hidden 2xl:block relative w-full max-w-[1600px] mx-auto h-[1100px]">
        <h1 className="absolute top-[50px] left-[270px] w-[900px] text-6xl font-normal font-heading text-black leading-none">
          Строим дома,
        </h1>
        <h1 className="absolute top-[120px] left-[110px] w-[1400px] text-6xl font-normal font-heading text-black leading-none">
          в който мечтаеш да се прибереш.
        </h1>
        <p className="absolute top-[240px] left-[700px] w-[1000px] text-4xl font-normal font-heading text-black leading-tight whitespace-nowrap">
          Строителство с български екип и сърце.
        </p>

        <Image
          src="/photo-right.png"
          alt="Сграда ляво"
          width={600}
          height={400}
          className="absolute top-[280px] left-[0px] rounded-xl object-cover"
        />
        <Image
          src="/photo-left.png"
          alt="Сграда дясно"
          width={600}
          height={400}
          className="absolute top-[380px] left-[1000px] rounded-xl object-cover"
        />
        <Image
          src="/badge-1994.svg"
          alt="1994"
          width={300}
          height={300}
          className="absolute object-contain top-[360px] left-[650px]"
        />
      </div>
    </section>
  );
}
