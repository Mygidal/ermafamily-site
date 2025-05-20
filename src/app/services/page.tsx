'use client';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="pt-[80px] px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        Нашите услуги
      </h1>

      {/* Строителство на сгради */}
      <section className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🏗️ Строителство на сгради</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Проектиране и изграждане на жилищни и търговски сгради</li>
            <li>Изпълнение на груб строеж и довършителни работи</li>
            <li>Монтаж на фасадни системи и покривни конструкции</li>
            <li>Инсталация на електро и ВиК системи</li>
            <li>Управление на строителни проекти и технически надзор</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/building.jpg"
            alt="Строителство на сгради"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Вътрешни довършителни работи */}
      <section className="flex flex-col lg:flex-row-reverse gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🛠️ Вътрешни довършителни работи</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Шпакловка, боядисване и декоративни мазилки</li>
            <li>Полагане на подови настилки – паркет, ламинат, теракот</li>
            <li>Монтаж на окачени тавани и гипсокартон</li>
            <li>Инсталиране на осветление и електрооборудване</li>
            <li>Обзавеждане и интериорен дизайн по проект</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/interior.jpg"
            alt="Вътрешни довършителни работи"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
