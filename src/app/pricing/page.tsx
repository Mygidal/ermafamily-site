"use client";

import AIAssistant from "../../components/AIAssistant";

export default function PriceCalculator() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 pb-20 pt-[100px] text-blue-900">
      <h2 className="font-montserrat mb-10 text-center text-3xl font-bold md:text-4xl">
        Цени на строителство
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* === БЛОК 1: ЦЕНИ === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-4 text-xl font-semibold">
            Ориентировъчни цени (лв.)
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Груб строеж – по разгъната застроена площ: от 500 лв./м²</li>
            <li>Груб строеж – по контур на плоча: от 600 лв./м²</li>
            <li>Довършване до ключ: от 900 до 1200 лв./м²</li>
            <li>Изкоп и извозване: около 60 лв./м³</li>
            <li>Кофраж и армировка: около 360 лв./м²</li>
            <li>Плоча + колони: около 400 лв./м²</li>
            <li>Зидария: около 80 лв./м²</li>
            <li>Изолация и мазилка: около 130 лв./м²</li>
            <li>HPL фасада: около 240 лв./м²</li>
            <li>Скатен покрив: около 160 лв./м²</li>
            <li>Плосък покрив: около 120 лв./м²</li>
          </ul>
          <p className="mt-4 text-xs italic text-gray-500">
            Цените са ориентировъчни и подлежат на уточнение след оглед и среща
            с клиента.
          </p>
        </div>

        {/* === БЛОК 2: AI ОФЕРТАНТ === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            AI Офертант
          </h3>
          <AIAssistant />
        </div>

        {/* === БЛОК 3: ФОРМА === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            Запитване
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Вашето име"
              className="rounded border p-2"
            />
            <input
              type="email"
              placeholder="Имейл"
              className="rounded border p-2"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="rounded border p-2"
            />
            <textarea
              placeholder="Опишете проекта..."
              rows={4}
              className="rounded border p-2"
            ></textarea>
            <button
              type="submit"
              className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
            >
              Изпрати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
