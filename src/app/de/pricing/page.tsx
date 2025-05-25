"use client";

import AIAssistant from "../../../components/AIAssistant";

export default function PriceCalculator() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 pb-20 pt-[100px] text-blue-900">
      <h2 className="font-montserrat mb-10 text-center text-3xl font-bold md:text-4xl">
        Baupreise
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* === BLOCK 1: PREISE === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-4 text-xl font-semibold">Ungefähre Preise (BGN)</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
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
          <p className="mt-4 text-xs italic text-gray-500">
            Die Preise sind Richtwerte und werden nach einer Besichtigung und
            einem Gespräch präzisiert.
          </p>
        </div>

        {/* === BLOCK 2: AI-KALKULATOR === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            AI Kalkulator
          </h3>
          <AIAssistant lang="de" />
        </div>

        {/* === BLOCK 3: ANFRAGEFORMULAR === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            Anfrage
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Ihr Name"
              className="rounded border p-2"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="rounded border p-2"
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="rounded border p-2"
            />
            <textarea
              placeholder="Projektbeschreibung..."
              rows={4}
              className="rounded border p-2"
            ></textarea>
            <button
              type="submit"
              className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
