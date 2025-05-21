"use client";

import { useState } from "react";

export default function PriceCalculator() {
  const [area, setArea] = useState(100);
  const [construction, setConstruction] = useState("Груб строеж");
  const [floors, setFloors] = useState(1);
  const [basement, setBasement] = useState(false);
  const [roof, setRoof] = useState("Скатен");
  const [exterior, setExterior] = useState("Стенна изолация + мазилка");

  const baseRate = construction === "Груб строеж" ? 250 : 400;
  const floorMultiplier = floors * 1.05;
  const basementCost = basement ? 8000 : 0;
  const roofCost = roof === "Плосък" ? 5000 : 8000;
  const exteriorCost =
    exterior === "Фасада с HPL панели" ? 20000 : 8000;

  const total =
    area * baseRate * floorMultiplier + basementCost + roofCost + exteriorCost;

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-24 text-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat">
        Калкулатор за ориентировъчна строителна цена
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
        Този калкулатор ще ви помогне да получите базова представа за стойността
        на строителството според зададени параметри. Цените са ориентировъчни и
        не включват ДДС.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-1 font-semibold text-sm">Тип строителство</label>
            <select
              value={construction}
              onChange={(e) => setConstruction(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option>Груб строеж</option>
              <option>До ключ</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Обща застроена площ (м²)</label>
            <input
              type="number"
              value={area}
              min={20}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Брой етажи</label>
            <select
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} етаж(а)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={basement}
                onChange={(e) => setBasement(e.target.checked)}
              />
              Включва ли мазе или сутерен?
            </label>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Покрив</label>
            <select
              value={roof}
              onChange={(e) => setRoof(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option>Скатен</option>
              <option>Плосък</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Фасада</label>
            <select
              value={exterior}
              onChange={(e) => setExterior(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option>Стенна изолация + мазилка</option>
              <option>Фасада с HPL панели</option>
            </select>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 text-sm">
              Цена на м²: <strong>{baseRate} €</strong>
            </p>
            <p className="text-xl font-semibold mt-2">
              Ориентировъчна стойност: <span className="text-green-600">{total.toLocaleString()} €</span>
            </p>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg p-6 text-sm text-gray-700 leading-relaxed shadow-inner">
          <h3 className="font-semibold text-blue-800 mb-2">Единични ориентировъчни цени:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Изкоп и извозване: ~30 €/м³</li>
            <li>Кофраж + армировка: ~180 €/м²</li>
            <li>Плоча + колони: ~200 €/м²</li>
            <li>Зидария: ~40 €/м²</li>
            <li>Външна мазилка + изолация: ~65 €/м²</li>
            <li>HPL фасада: ~120 €/м²</li>
            <li>Скатен покрив: ~80 €/м²</li>
            <li>Плосък покрив: ~60 €/м²</li>
          </ul>

          <p className="text-xs mt-6 text-gray-500 italic">
            Всички цени са ориентировъчни и подлежат на уточнение след оглед на терен и разговор с инвеститора.
          </p>

          <button className="mt-6 w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
            Изпрати запитване
          </button>
        </div>
      </div>
    </section>
  );
}
