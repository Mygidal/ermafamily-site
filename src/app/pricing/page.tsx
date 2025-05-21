'use client';

import AIAssistant from '../../components/AIAssistant';

export default function PriceCalculator() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-[100px] pb-20 text-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat">
        Цени на строителство
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* === БЛОК 1: ЦЕНИ === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">

          <h3 className="text-xl font-semibold mb-4">Ориентировъчни цени (лв.)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
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
          <p className="text-xs mt-4 text-gray-500 italic">
            Цените са ориентировъчни и подлежат на уточнение след оглед и среща с клиента.
          </p>
        </div>

        {/* === БЛОК 2: AI ОФЕРТАНТ === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">

          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">AI Офертант</h3>
          <AIAssistant />
        </div>

        {/* === БЛОК 3: ФОРМА === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">

          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">Запитване</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Вашето име"
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Имейл"
              className="p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Опишете проекта..."
              rows={4}
              className="p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Изпрати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
