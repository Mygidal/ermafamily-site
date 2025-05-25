"use client";

console.log("AIAssistant geladen");

import { useState } from "react";
import { basePrices, surcharges } from "../data/priceData";

export default function AIAssistant({
  lang = "bg",
}: {
  lang?: "bg" | "en" | "de";
}) {
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [hasBasement, setHasBasement] = useState(false);
  const [hasGarage, setHasGarage] = useState(false);
  const [terrainHard, setTerrainHard] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const labels = {
    bg: {
      title: "AI Офертант – изчисли ориентировъчна цена",
      type: "Тип обект",
      select: "-- Избери --",
      area: "Квадратура (м²)",
      basement: "Има сутерен",
      garage: "Включва гараж",
      terrain: "Труден терен (достъп или наклон)",
      calculate: "Изчисли офертата",
      error: "Моля, попълнете валидна квадратура и тип обект.",
      result: (sum: number, area: string, type: string) =>
        `Очаквана стойност: ~${sum.toLocaleString()} лв. за ${area} м² (${type})`,
    },
    en: {
      title: "AI Estimator – Calculate Approximate Price",
      type: "Building Type",
      select: "-- Select --",
      area: "Area (m²)",
      basement: "Includes basement",
      garage: "Includes garage",
      terrain: "Difficult terrain (access or slope)",
      calculate: "Calculate",
      error: "Please enter a valid area and building type.",
      result: (sum: number, area: string, type: string) =>
        `Estimated cost: ~${sum.toLocaleString()} BGN for ${area} m² (${type})`,
    },
    de: {
      title: "AI Kalkulator – Berechne den Richtpreis",
      type: "Objekttyp",
      select: "-- Wählen --",
      area: "Fläche (m²)",
      basement: "Mit Keller",
      garage: "Mit Garage",
      terrain: "Schwer zugängliches Gelände",
      calculate: "Berechnen",
      error: "Bitte geben Sie eine gültige Fläche und Objekttyp ein.",
      result: (sum: number, area: string, type: string) =>
        `Geschätzte Kosten: ~${sum.toLocaleString()} BGN für ${area} m² (${type})`,
    },
  };

  const typeLabels: Record<string, Record<string, string>> = {
    bg: {
      "Еднофамилна къща": "Еднофамилна къща",
      "Многофамилна сграда": "Многофамилна сграда",
      "Складово хале": "Складово хале",
      "Търговски обект": "Търговски обект",
      "Офис сграда": "Офис сграда",
      "Селскостопанска постройка": "Селскостопанска постройка",
    },
    en: {
      "Еднофамилна къща": "Single-family house",
      "Многофамилна сграда": "Multi-family building",
      "Складово хале": "Warehouse hall",
      "Търговски обект": "Commercial building",
      "Офис сграда": "Office building",
      "Селскостопанска постройка": "Agricultural structure",
    },
    de: {
      "Еднофамилна къща": "Einfamilienhaus",
      "Многофамилна сграда": "Mehrfamilienhaus",
      "Складово хале": "Lagerhalle",
      "Търговски обект": "Gewerbegebäude",
      "Офис сграда": "Bürogebäude",
      "Селскостопанска постройка": "Landwirtschaftsgebäude",
    },
  };

  const t = labels[lang];
  const labelFor = (key: string) => typeLabels[lang]?.[key] || key;

  const handleCalculate = () => {
    if (!type || !area || isNaN(Number(area))) {
      setResult(t.error);
      return;
    }

    const basePrice = basePrices[type as keyof typeof basePrices] || 0;
    let total = basePrice * Number(area);

    if (hasBasement) total += total * surcharges["Сутерен"];
    if (hasGarage) total += surcharges["Гараж"];
    if (terrainHard) total += total * surcharges["Труден терен"];

    setResult(t.result(Math.round(total), area, labelFor(type)));
  };

  return (
    <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">{t.title}</h2>

      <div className="mb-4">
        <label className="mb-1 block font-medium">{t.type}</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded border p-2"
        >
          <option value="">{t.select}</option>
          {Object.keys(basePrices).map((key) => (
            <option key={key} value={key}>
              {labelFor(key)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-1 block font-medium">{t.area}</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full rounded border p-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasBasement}
            onChange={() => setHasBasement(!hasBasement)}
          />
          {t.basement}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasGarage}
            onChange={() => setHasGarage(!hasGarage)}
          />
          {t.garage}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={terrainHard}
            onChange={() => setTerrainHard(!terrainHard)}
          />
          {t.terrain}
        </label>
      </div>

      <button
        onClick={handleCalculate}
        className="rounded bg-blue-900 px-4 py-2 text-white transition hover:bg-blue-800"
      >
        {t.calculate}
      </button>

      {result && (
        <div className="mt-4 text-lg font-semibold text-green-700">
          {result}
        </div>
      )}
    </div>
  );
}
