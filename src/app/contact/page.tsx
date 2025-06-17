"use client";

import { useState } from "react";

export default function ContactPage() {
  const contacts = [
    { name: "Цветанка Йовева", role: "Управител", phone: "+359 887 317 087" },
    {
      name: "Еди Йовев",
      role: "Технически ръководител",
      phone: "+359 888 071 404",
    },
    {
      name: "Моника Йовева",
      role: "Проектен координатор",
      phone: "+359 885 651 505",
    },
    {
      name: "Андрей Александров",
      role: "Груб строеж",
      phone: "+359 878 447 214",
    },
    {
      name: "Стефан Митков",
      role: "Довършителни работи",
      phone: "+359 888 444 396",
    },
  ];

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Email error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-[100px]">
      <div className="mb-8 text-center">
        <h1 className="font-montserrat mb-2 text-3xl font-bold text-blue-900 md:text-4xl">
          Свържете се с нас
        </h1>
        <p className="font-inter text-base text-gray-600 md:text-lg">
          Ще се радваме да отговорим на вашите въпроси!
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-8 lg:flex-row">
        {/* Форма */}
        <div className="flex-1 space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Вашето име"
                required
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Вашият имейл"
                required
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Съобщение"
              rows={5}
              required
              className="w-full resize-none rounded border border-gray-300 px-4 py-2"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-900 px-6 py-2 text-white transition hover:bg-blue-800"
            >
              Изпрати
            </button>
            {status === "success" && (
              <p className="text-green-600">Изпратено успешно!</p>
            )}
            {status === "error" && (
              <p className="text-red-600">Възникна грешка при изпращане.</p>
            )}
          </form>
        </div>

        {/* Контакти по отдели + Адрес и имейл вдясно */}
        <div className="flex-1 space-y-6 text-sm text-gray-700">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-blue-900">
              Контакти по отдели
            </h3>
            <div className="space-y-3">
              {contacts.map((person, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{person.name}</p>
                    <p className="text-sm text-gray-500">{person.role}</p>
                  </div>
                  <a
                    href={`tel:${person.phone.replace(/\s+/g, "")}`}
                    className="mt-1 text-sm text-blue-800 hover:underline sm:mt-0"
                  >
                    📞 {person.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Адрес и имейл под контактите – само за десктоп */}
          <div className="hidden justify-between gap-12 pt-2 text-sm text-gray-700 lg:flex">
            <div>
              <h3 className="text-base font-bold text-blue-900">Адрес</h3>
              <a
                href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София/@42.6777594,23.2508653,799m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                София, кв. „Овча купел“, ул. 692, №12
              </a>
            </div>
            <div>
              <h3 className="text-base font-bold text-blue-900">Имейл</h3>
              <a
                href="mailto:team@ermafamily.com"
                className="text-blue-800 hover:underline"
              >
                team@ermafamily.com
              </a>
            </div>
          </div>

          {/* Скрит бутон за файлове */}
          <div className="hidden">
            <label htmlFor="fileInput">Избор на файлове</label>
            <input type="file" id="fileInput" />
          </div>
        </div>
      </div>

      <div className="mb-6 h-[300px] w-full overflow-hidden rounded-xl shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=42.677105,23.255564&z=17&output=embed"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mb-10 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=София,+ул.+692,+Овча+купел"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-blue-900 px-6 py-2 text-sm text-white transition hover:bg-blue-800"
        >
          🧭 Как да стигна до офиса
        </a>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p className="font-semibold text-blue-900">Работно време:</p>
        <p>Понеделник – Петък: 09:00 – 18:00</p>
        <p>Събота – Неделя: Почивни дни</p>
      </div>
    </div>
  );
}
