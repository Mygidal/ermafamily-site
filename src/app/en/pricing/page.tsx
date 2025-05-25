"use client";

import AIAssistant from "../../../components/AIAssistant";

export default function PriceCalculator() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 pb-20 pt-[100px] text-blue-900">
      <h2 className="font-montserrat mb-10 text-center text-3xl font-bold md:text-4xl">
        Construction Pricing
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* === BLOCK 1: PRICES === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-4 text-xl font-semibold">
            Approximate Prices (BGN)
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>
              Shell construction – by gross built-up area: from 500 BGN/m²
            </li>
            <li>Shell construction – by slab contour: from 600 BGN/m²</li>
            <li>Turnkey completion: from 900 to 1200 BGN/m²</li>
            <li>Excavation and disposal: around 60 BGN/m³</li>
            <li>Formwork and reinforcement: around 360 BGN/m²</li>
            <li>Slabs + columns: around 400 BGN/m²</li>
            <li>Brickwork: around 80 BGN/m²</li>
            <li>Insulation and plaster: around 130 BGN/m²</li>
            <li>HPL facade: around 240 BGN/m²</li>
            <li>Pitched roof: around 160 BGN/m²</li>
            <li>Flat roof: around 120 BGN/m²</li>
          </ul>
          <p className="mt-4 text-xs italic text-gray-500">
            Prices are indicative and subject to clarification after site
            inspection and meeting.
          </p>
        </div>

        {/* === BLOCK 2: AI ESTIMATOR === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            AI Estimator
          </h3>
          <AIAssistant lang="en" />
        </div>

        {/* === BLOCK 3: INQUIRY FORM === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            Request a Quote
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="rounded border p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded border p-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="rounded border p-2"
            />
            <textarea
              placeholder="Describe your project..."
              rows={4}
              className="rounded border p-2"
            ></textarea>
            <button
              type="submit"
              className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
