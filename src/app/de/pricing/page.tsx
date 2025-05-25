'use client';

import AIAssistant from '../../../components/AIAssistant';

export default function PriceCalculator() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-[100px] pb-20 text-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat">
        Baupreise
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* === BLOCK 1: PREISE === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4">Ungefähre Preise (BGN)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
            <li>Rohbau – nach Bruttogeschossfläche: ab 500 BGN/m²</li>
            <li>Rohbau – nach Plattenkontur: ab 600 BGN/m²</li>
            <li>Schlüsselfertige Fertigstellung: 900–1200 BGN/m²</li>
            <li>Aushub und Abfuhr: ca. 60 BGN/m³</li>
            <li>Schalung und Bewehrung: ca. 360 BGN/m²</li>
            <li>Platten + Säulen: ca. 400 BGN/m²</li>
            <li>Mauerwerk: ca. 80 BGN/m²</li>
            <li>Wärmedämmung und Putz: ca. 130 BGN/m²</li>
            <li>HPL-Fassade: ca. 240 BGN/m²</li>
            <li>Satteldach: ca. 160 BGN/m²</li>
            <li>Flachdach: ca. 120 BGN/m²</li>
          </ul>
          <p className="text-xs mt-4 text-gray-500 italic">
            Die Preise sind Richtwerte und werden nach einer Besichtigung und einem Gespräch präzisiert.
          </p>
        </div>

        {/* === BLOCK 2: AI-KALKULATOR === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">AI Kalkulator</h3>
          <AIAssistant lang="de" />

        </div>

        {/* === BLOCK 3: ANFRAGEFORMULAR === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">Anfrage</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Ihr Name"
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Projektbeschreibung..."
              rows={4}
              className="p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
