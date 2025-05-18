
'use client';
import Image from 'next/image';

'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[1100px] text-blue-900 pt-[80px] overflow-hidden">
      <div className="relative w-full max-w-[1600px] mx-auto h-full">

        {/* === ЗАГЛАВИЕ 1 === */}
        {/* Десктоп */}
        <div className="absolute top-[50px] left-[270px] w-[900px] hidden sm:block">
          <h1 className="text-6xl font-normal font-heading text-black leading-none">
            Строим дома,
          </h1>
        </div>

        {/* === МОБИЛНО ЗАГЛАВИЕ – РЕД 1 === */}
<div className="absolute top-[30px] left-[30px] w-[90%] sm:hidden">
  <h1 className="text-2xl font-normal font-heading text-black leading-none">
    Строим дома, в който
  </h1>
</div>

{/* === РЕД 2 === */}
<div className="absolute top-[60px] left-[10px] w-[95%] sm:hidden">
  <h1 className="text-2xl font-normal font-heading text-black leading-none">
    мечтаеш да се прибереш.
  </h1>
</div>

        {/* === ЗАГЛАВИЕ 2 === */}
        <div className="absolute top-[120px] left-[110px] w-[1400px] hidden sm:block">
          <h1 className="text-6xl font-normal font-heading text-black leading-none">
            в който мечтаеш да се прибереш.
          </h1>
        </div>

        

        {/* === ПОДЗАГЛАВИЕ === */}
        <div className="absolute top-[240px] left-[700px] w-[1000px] hidden sm:block">
          <p className="text-4xl font-normal font-heading text-black leading-tight whitespace-nowrap">
            Строителство с български екип и сърце.
          </p>
        </div>

       {/* === РЕД 3 === */}
<div className="absolute top-[100px] left-[40px] w-[90%] sm:hidden">
  <p className="text-1xl font-normal font-heading text-black leading-tight">
    Строителство с 
  </p>
</div>

{/* === РЕД 4 === */}
<div className="absolute top-[120px] left-[110px] w-[90%] sm:hidden">
  <p className="text-1xl font-normal font-heading text-black leading-tight">
    български екип и сърце.
  </p>
</div>

        {/* === СГРАДА ЛЯВО === */}
        <img
          src="/photo-right.png"
          alt="Сграда ляво"
          className="
            absolute rounded-xl object-cover
            top-[280px] left-[0px] w-[600px] hidden sm:block
            sm:top-[280px] sm:left-[0px]
          "
        />
        <img
          src="/photo-right.png"
          alt="Сграда ляво мобилен"
          className="
            absolute rounded-xl object-cover
            top-[170px] left-[20px] w-[90%] sm:hidden
          "
        />

        {/* === СГРАДА ДЯСНО === */}
        <img
          src="/photo-left.png"
          alt="Сграда дясно"
          className="
            absolute rounded-xl object-cover
            top-[380px] left-[1000px] w-[600px] hidden sm:block
          "
        />
        <img
          src="/photo-left.png"
          alt="Сграда дясно мобилен"
          className="
            absolute rounded-xl object-cover
            top-[440px] left-[20px] w-[90%] sm:hidden
          "
        />
<img
  src="/photo-maika.png"
  alt="Жена с чертежи"
  className="
    absolute rounded-xl object-cover
    top-[710px] left-[20px] w-[90%] sm:hidden
  "
/>

        {/* === ЕМБЛЕМА 1994 === */}
        <img
          src="/badge-1994.png"
          alt="1994"
          className="
            absolute object-contain
            top-[260px] left-[150px] w-[1300px] hidden sm:block
          "
        />
       
      </div>
    </section>
  );
}
