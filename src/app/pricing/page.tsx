"use client";

import { useState } from "react";

export default function PriceCalculator() {
  const [area, setArea] = useState(100);
  const [construction, setConstruction] = useState("Груб строеж");
  const [floors, setFloors] = useState(1);
  const [basement, setBasement] = useState(false);
  const [roof, setRoof] = useState("Скатен");
  const [exterior, setExterior] = useState("Стенна изолация + мазилка");
  const [customRate, setCustomRate] = useState(500); // Цена на кв.м в лв.
  const [showInquiry, setShowInquiry] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const floorMultiplier = floors * 1.05;
  const basementCost = basement ? 15000 : 0;
  const roofCost = roof === "Плосък" ? 10000 : 15000;
  const exteriorCost = exterior === "Фасада с HPL панели" ? 30000 : 12000;

  const total = area * customRate * floorMultiplier + basementCost + roofCost + exteriorCost;

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-24 text-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat">
        Цени на строителство
      </h2>

      <div className="bg-white border border-gray-200 p-6 rounded-lg mb-12 shadow">
        <h3 className="text-xl font-semibold mb-4">Ориентировъчни строителни цени (в лв.)</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          <li>Груб строеж – по разгъната застроена площ: от 500 лв./м²</li>
          <li>Груб строеж – по контур на плоча: от 600 лв./м²</li>
          <li>Довършване до ключ: от 900 до 1200 лв./м² в зависимост от материалите</li>
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

      <h2 className="text-2xl font-bold text-center mb-6">Калкулатор за ориентировъчна цена</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <label className="block">
            <span className="text-sm font-semibold">Тип строителство</span>
            <select
              value={construction}
              onChange={(e) => setConstruction(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            >
              <option>Груб строеж</option>
              <option>До ключ</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Цена на м² (лв.) – настройка</span>
            <input
              type="number"
              value={customRate}
              onChange={(e) => setCustomRate(Number(e.target.value))}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Обща застроена площ (м²)</span>
            <input
              type="number"
              value={area}
              min={20}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Брой етажи</span>
            <select
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} етаж(а)</option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={basement}
              onChange={(e) => setBasement(e.target.checked)}
            />
            Включва ли мазе или сутерен?
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Покрив</span>
            <select
              value={roof}
              onChange={(e) => setRoof(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            >
              <option>Скатен</option>
              <option>Плосък</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Фасада</span>
            <select
              value={exterior}
              onChange={(e) => setExterior(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            >
              <option>Стенна изолация + мазилка</option>
              <option>Фасада с HPL панели</option>
            </select>
          </label>

          <p className="text-xl font-semibold mt-6">
            Ориентировъчна стойност: <span className="text-green-600">{total.toLocaleString()} лв.</span>
          </p>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 shadow-inner text-sm">
          <h3 className="font-semibold text-blue-800 mb-2">Искате оферта?</h3>
          <button
            onClick={() => setShowInquiry(!showInquiry)}
            className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Изпрати запитване
          </button>

          {showInquiry && (
  <form className="mt-4 space-y-3">
    <input
      type="text"
      placeholder="Вашето име"
      value={contact.name}
      onChange={(e) => setContact({ ...contact, name: e.target.value })}
      className="w-full p-2 border border-gray-300 rounded"
    />
    <input
      type="email"
      placeholder="Имейл"
      value={contact.email}
      onChange={(e) => setContact({ ...contact, email: e.target.value })}
      className="w-full p-2 border border-gray-300 rounded"
    />
    <input
      type="tel"
      placeholder="Телефон"
      value={contact.phone}
      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      className="w-full p-2 border border-gray-300 rounded"
    />
    <textarea
      placeholder="Вашето запитване – опишете обекта, особености, изисквания..."
      rows={4}
      className="w-full p-2 border border-gray-300 rounded"
    ></textarea>
    <button
      type="submit"
      className="bg-green-700 hover:bg-green-600 text-white w-full py-2 px-4 rounded"
    >
      Изпрати
    </button>
  </form>
)}

        </div>
      </div>
    </section>
  );
}
