'use client';
console.log("AIAssistant зареден");

import { useState } from 'react';
import { basePrices, surcharges } from '../data/priceData';

export default function AIAssistant() {
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [hasBasement, setHasBasement] = useState(false);
  const [hasGarage, setHasGarage] = useState(false);
  const [terrainHard, setTerrainHard] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!type || !area || isNaN(Number(area))) {
      setResult('Моля, попълнете валидна квадратура и тип обект.');
      return;
    }

    const basePrice = basePrices[type as keyof typeof basePrices] || 0;
    let total = basePrice * Number(area);

    if (hasBasement) total += total * surcharges['Сутерен'];
    if (hasGarage) total += surcharges['Гараж'];
    if (terrainHard) total += total * surcharges['Труден терен'];

    setResult(`Очаквана стойност: ~${Math.round(total).toLocaleString()} лв. за ${area} м² (${type})`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">AI Офертант – изчисли ориентировъчна цена</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Тип обект</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border p-2 rounded">
          <option value="">-- Избери --</option>
          {Object.keys(basePrices).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Квадратура (м²)</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hasBasement} onChange={() => setHasBasement(!hasBasement)} />
          Има сутерен
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hasGarage} onChange={() => setHasGarage(!hasGarage)} />
          Включва гараж
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={terrainHard} onChange={() => setTerrainHard(!terrainHard)} />
          Труден терен (достъп или наклон)
        </label>
      </div>

      <button
        onClick={handleCalculate}
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Изчисли офертата
      </button>

      {result && <div className="mt-4 text-lg font-semibold text-green-700">{result}</div>}
    </div>
  );
}
