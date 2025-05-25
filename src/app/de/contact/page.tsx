"use client";
import Image from "next/image";

export default function ContactPage() {
  const contacts = [
    {
      name: "Tsvetanka Yoveva",
      role: "Geschäftsführerin",
      phone: "+359 887 317 087",
    },
    {
      name: "Edi Yovev",
      role: "Technischer Leiter",
      phone: "+359 888 071 404",
    },
    {
      name: "Monika Yoveva",
      role: "Projektkoordinatorin",
      phone: "+359 885 651 505",
    },
    {
      name: "Andrey Alexandrov",
      role: "Rohbauleitung",
      phone: "+359 878 447 214",
    },
    {
      name: "Stefan Mitkov",
      role: "Leitung Innenausbau",
      phone: "+359 888 444 396",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-[100px]">
      {/* Titel */}
      <div className="mb-8 text-center">
        <h1 className="font-montserrat mb-2 text-3xl font-bold text-blue-900 md:text-4xl">
          Kontaktieren Sie uns
        </h1>
        <p className="font-inter text-base text-gray-600 md:text-lg">
          Wir freuen uns, Ihre Fragen zu beantworten!
        </p>
      </div>

      {/* Formular + Info */}
      <div className="mb-10 flex flex-col gap-8 lg:flex-row">
        {/* Formular */}
        <form className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Ihr Name"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <input
              type="email"
              placeholder="Ihre E-Mail"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
          </div>
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full rounded border border-gray-300 px-4 py-2"
          />
          <textarea
            placeholder="Nachricht"
            rows={5}
            className="w-full resize-none rounded border border-gray-300 px-4 py-2"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-900 px-6 py-2 text-white transition hover:bg-blue-800"
          >
            Senden
          </button>
        </form>

        {/* Kontaktinformation */}
        <div className="flex-1 space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="text-base font-bold text-blue-900">Adresse</h3>
            <a
              href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline"
            >
              Sofia, Stadtteil Ovcha Kupel, Straße 692, Nr. 12
            </a>
          </div>

          <div>
            <h3 className="text-base font-bold text-blue-900">E-Mail</h3>
            <p>
              <a
                href="mailto:team@ermafamily.com"
                className="text-blue-800 hover:underline"
              >
                team@ermafamily.com
              </a>
            </p>
          </div>

          <div className="mt-2 flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61564031771496"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icon-facebook.png" alt="Facebook" className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/erma.familna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icon-instagram.png"
                alt="Instagram"
                className="size-6"
              />
            </a>
          </div>

          {/* Ansprechpartner */}
          <div className="mt-6 space-y-4">
            <h3 className="text-base font-bold text-blue-900">
              Ansprechpartner
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
        </div>
      </div>

      {/* Karte */}
      <div className="mb-6 h-[300px] w-full overflow-hidden rounded-xl shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.3720703726787!2d23.254711615731854!3d42.67775557916617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b2fe0506391%3A0x58036b9c19288a11!2z0KHQsNC00LDRgtGMINC60LvRltC60LDRgNC90LAgItCQ0LvQtdC90LAgNjkyLCDQodCw0LQ!5e0!3m2!1sbg!2sbg!4v1716900000000"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Routen-Button */}
      <div className="mb-10 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Sofia,+692,+Ovcha+Kupel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-blue-900 px-6 py-2 text-sm text-white transition hover:bg-blue-800"
        >
          🧭 Route zum Büro anzeigen
        </a>
      </div>

      {/* Öffnungszeiten */}
      <div className="text-center text-sm text-gray-600">
        <p className="font-semibold text-blue-900">Öffnungszeiten:</p>
        <p>Montag – Freitag: 09:00 – 18:00 Uhr</p>
        <p>Samstag – Sonntag: Geschlossen</p>
      </div>
    </div>
  );
}
