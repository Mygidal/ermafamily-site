'use client';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Цветанка Стоилова Йовева',
    position: 'Основател & Съуправител',
    image: '/team/cvetanka.jpg',
  },
  {
    name: 'Еди Боянов Йовев',
    position: 'Съосновател & Технически ръководител',
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

export default function Page() {
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
          В същата традиция е и <strong>Александър Александров †</strong> – дългогодишен групов технически ръководител, проверяващ по европейски проекти, с ключова роля в <strong>Терминал 2 на Летище София</strong> и множество инфраструктурни обекти. Неговият син, <strong>Андрей Александров</strong>, днес ръководи грубия строеж в ЕРМА със същата прецизност и отговорност.
        </p>
        <p>
          Днес техните синове – <strong>Боян Георгиев Йовев</strong> (инвеститор и партньор чрез &quot;Х5М ГРУП&quot; и &quot;ХИКС 5 ГРУП ЕООД&quot;) и <strong>Андрей Александров</strong> (ръководител на груби строежи в ЕРМА) – продължават тяхното дело.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 text-center mt-12 mb-6">👷 Днешният екип</h2>
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
