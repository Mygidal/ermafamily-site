"use client";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="font-inter mx-auto max-w-screen-xl space-y-12 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="font-montserrat text-center text-3xl font-bold text-blue-900 md:text-4xl">
        Нашите услуги
      </h1>

      {/* Въведение – бутиково строителство */}
      <section className="mx-auto max-w-3xl space-y-4 text-center text-gray-700">
        <p>
          <strong>ЕРМА – ФАМИЛНА ООД</strong> се специализира в{" "}
          <strong>бутиково строителство</strong>, насочено към клиенти, които
          ценят качеството, индивидуалното обслужване и устойчивото изграждане.
        </p>
        <p>
          Предпочитаме да работим по{" "}
          <strong>частни къщи (от основи до ключ)</strong> и{" "}
          <strong>малки жилищни кооперации</strong>, където можем да прилагаме
          персонализирани решения и занаятчийски подход. По желание на клиента
          можем да изградим и <strong>умен дом</strong> – с автоматизирано
          осветление, климатизация, сигурност и управление чрез мобилно
          приложение.
        </p>
      </section>

      {/* Строителство на сгради */}
      <section className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🏗️ Строителство на сгради
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
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
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>

      {/* Вътрешни довършителни работи */}
      <section className="mb-12 flex flex-col items-center gap-10 lg:flex-row-reverse">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🛠️ Вътрешни довършителни работи
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Шпакловка, боядисване и декоративни мазилки</li>
            <li>Полагане на подови настилки – паркет, ламинат, теракот</li>
            <li>Монтаж на окачени тавани и гипсокартон</li>
            <li>Инсталиране на осветление и електрооборудване</li>
            <li>Обзавеждане и интериорен дизайн по проект</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/interior.png"
            alt="Вътрешни довършителни работи"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
