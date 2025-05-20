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
];

export default function TeamPage() {
  return (
    <div className="pt-[80px] px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        НАШИЯТ ЕКИП
      </h1>

      <section className="text-center max-w-3xl mx-auto space-y-4 text-gray-700">
        <p>
          <strong>ЕРМА – ФАМИЛНА ООД</strong> не е просто строителна компания – тя е вяра в семейството, традицията и честния труд, вплетени в нашата кръв и вградено в нашето дело.
        </p>
        <p>
          Всеки от нас носи наследството на предците си – и ние вярваме, че това наследство не е просто памет, а посока.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🧱 Основите: Трънският край</h2>
        <p>
          Корените ни се вписват дълбоко в скалите на <strong>Трънския край</strong> – родно място на поколения майстори, чиято работа е известна из цяла България. Оттам произхожда † <strong>Стоил Трендафилов</strong> – не просто строител, а <strong>ръководител на строителството на НДК в София</strong>, и дядо на настоящите ни основатели. Неговата отдаденост, точност и мащабно мислене задават висотата, към която се стремим всеки ден.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🛠 Дупнишката линия</h2>
        <p>
          Съпругът на Цветанка – † <strong>Георги Йовев</strong>, е родом от <strong>Дупнишкия край</strong> и е основател на „ГЕЦЕБОМИ“ ЕООД – една от водещите строителни компании в Източна България. Неговият строителен дух, бизнес етика и влияние се усещат и днес.
        </p>
        <p>
          Техният син, <strong>Боян Георгиев Йовев</strong> – основател на <strong>Х5М ГРУП</strong> и <strong>ХИКС 5 ГРУП</strong>, продължава семейната мисия като стратегически партньор и инвеститор.  
          Неговите деца, <strong>Еди Боянов Йовев</strong> и <strong>Моника Боянова Йовева</strong>, днес са съоснователи и двигатели на новото лице на ЕРМА – ФАМИЛНА ООД.
        </p>
        <p>
          Още една нишка от Дупнишката школа е † <strong>Александър Александров</strong> – отдаден бригадир по груби строежи. Днес, неговият син <strong>Андрей Александров</strong> продължава тази линия, ръководейки екипите със същото уважение и воля.
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
          В памет на <strong>Стоил Трендафилов</strong> – строител от Трънския край, баща, дядо, прадядо и <strong>ръководител на строежа на НДК</strong>.  
          Майстор по съвест, родоначалник по мисия. Той е нашият корен.
        </p>
        <p>
          В памет на <strong>Георги Йовев</strong> – съпруг, баща и строител от Дупнишкия край, основател на ГЕЦЕБОМИ ЕООД, чийто пример още ни води.
        </p>
        <p>
          В памет на <strong>Александър Александров</strong> – доайен на грубия строеж. Неговият син Андрей днес носи това име с гордост и чест.
        </p>
      </section>
    </div>
  );
}
