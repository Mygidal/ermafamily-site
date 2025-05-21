'use client';
import Image from 'next/image';
import { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Цветанка Стоилова Йовева',
    position: 'Основател & Съуправител',
    image: '/team/cvetanka.jpg',
  },
  {
    name: 'Еди Боянов Йовев',
    position: 'Съосновател, Технически ръководител и правоспособен оператор на кулокран',
    image: '/team/edi.jpg',
  },
  {
    name: 'Моника Боянова Йовева',
    position: 'Съосновател & Координатор проекти',
    image: '/team/monika.jpg',
  },
  {
    name: 'Андрей Александров',
    position: 'Ръководител груби строежи',
    image: '/team/andrey.jpg',
  },
  {
    name: 'Стефан Митков',
    position: 'Ръководител довършителни работи',
    image: '/team/stefan.jpg',
  },
  {
    name: 'Илиянка Давидова',
    position: 'Счетоводство & Офис мениджър',
    image: '/team/iliyana.jpg',
  },
];

export default function TeamPage() {
  useEffect(() => {
    const video = document.getElementById('teamVideo') as HTMLVideoElement | null;
    const overlay = document.getElementById('videoOverlayText');

    if (video && overlay) {
      video.addEventListener('play', () => (overlay.style.display = 'none'));
      video.addEventListener('pause', () => (overlay.style.display = 'flex'));
    }
  }, []);

  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        НАШИЯТ ЕКИП
      </h1>

      <section className="text-center max-w-3xl mx-auto space-y-4 text-gray-700">
        <p>
          <strong>ЕРМА – ФАМИЛНА ООД</strong> не е просто строителна фирма. Тя е <strong>живо родословие</strong>, вградено в бетон и съхранено в честността на майсторския труд.
        </p>
        <p>
          Началото ѝ е поставено през <strong>1994 година</strong> от <strong>Цветанка Стоилова Йовева</strong> – основател, визионер, майка. Вдъхновена от баща си <strong>Стоил Трендафилов</strong>, тя създава ЕРМА, вплитайки в нея духа на няколко поколения занаятчии.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🧱 Трънският край – люлка на майстори</h2>
        <p>
          Цветанка произхожда от <strong>Трънския край</strong> – суров, величествен регион, известен като <strong>извор на едни от най-добрите кофражисти и строители в България</strong>. Там, където камъкът говори, а занаятът се носи по рождение.
        </p>
        <p>
          Нейният баща, <strong>Стоил Трендафилов †</strong>, не само предава занаятчийските ценности, но и оставя следа в националната история като <strong>ръководител на строежа на НДК</strong> в София.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🛠 Дупнишкият дух – устойчив и предприемчив</h2>
        <p>
          Съпругът на Цветанка, <strong>Георги Йовев †</strong>, произлиза от <strong>Дупнишкия край</strong>. Той създава &quot;ГЕЦЕБОМИ&quot; ЕООД – една от водещите компании в Източна България, с визия, почтеност и авторитет.
        </p>
        <p>
          В същата традиция е и <strong>Александър Александров †</strong> – доайен на грубия строеж от Дупнишкия край, дългогодишен групов технически ръководител, проверяващ по европейски проекти, с ключова роля в <strong>Терминал 2 на Летище София</strong> и множество инфраструктурни обекти. Неговият син, <strong>Андрей Александров</strong>, днес ръководи грубия строеж в ЕРМА със същата прецизност и отговорност.
        </p>
        <p>
          Днес техните синове – <strong>Боян Георгиев Йовев</strong> (инвеститор и партньор чрез &quot;Х5М ГРУП&quot; и &quot;ХИКС 5 ГРУП ЕООД&quot;) и <strong>Андрей Александров</strong> (ръководител на груби строежи в ЕРМА) – продължават тяхното дело.
        </p>
      </section>

      <section>
  <h2 className="text-2xl font-bold text-blue-800 text-center mt-12 mb-6">👷 Днешният екип</h2>

  {/* 🎬 Видео под заглавието */}
  <div className="flex justify-center mb-8">
    <div className="relative w-full max-w-[420px] mx-auto rounded-xl overflow-hidden shadow-xl">
     {/* CTA текст върху постера преди пускане */}
<div className="absolute inset-0 z-10 flex items-center justify-center text-white text-sm sm:text-base font-semibold bg-black/60 px-4 text-center pointer-events-none">
  ЧУЙТЕ АНДРЕЙ АЛЕКСАНДРОВ И СТЕФАН МИТКОВ<br />ЗА СТРАТЕГИЯТА ЗА РАЗВИТИЕ НА ФИРМАТА
</div>

      <video
        id="teamVideo"
        controls
        poster="/gallery/videos/team-poster.jpg"
        className="w-full h-full object-contain bg-black"
      >
        <source src="/gallery/videos/gallery-video-02.mp4" type="video/mp4" />
        Вашият браузър не поддържа видео.
      </video>

      {/* Горен надпис */}
      <div className="absolute top-2 left-0 right-0 text-center text-white text-xs sm:text-sm font-semibold bg-black/40 px-2 py-1 z-10">
        ДВАТА СТЪЛБА НА КОИТО Е СТЪПИЛА &quot;ЕРМА ФАМИЛНА&quot;

      </div>

      {/* Долен надпис */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-white text-xs sm:text-sm font-semibold bg-black/40 px-2 py-1 z-10">
        📞 Обадете се за оглед: +359 88 123 4567
      </div>
    </div>
  </div>

  {/* Grid с екипа */}
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
    {teamMembers.map((member) => (
      <div
        key={member.name}
        className="flex flex-col items-center text-center p-4 shadow-md rounded-lg bg-white hover:shadow-lg transition"
      >
        <div className="relative w-[120px] h-[120px] mb-4">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-full border-4 border-blue-200"
          />
        </div>
        <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.position}</p>
      </div>
    ))}
  </div>
</section>


     

      <section className="mt-12 text-center text-sm text-gray-500 italic space-y-4">
        <p>
          В памет на <strong>Стоил Трендафилов</strong> – строител от Трънския край, баща, дядо, прадядо и ръководител на строежа на НДК. Майстор по съвест, родоначалник по мисия.
        </p>
        <p>
          В памет на <strong>Георги Йовев</strong> – строител, предприемач от Дупнишкия край, основател на &quot;ГЕЦЕБОМИ&quot;, съпруг, баща и вдъхновител.
        </p>
        <p>
          В памет на <strong>Александър Александров</strong> – доайен на грубия строеж от Дупнишкия край, баща и пример за труд, сила и вярност към занаята.
        </p>
      </section>
    </div>
  );
}
