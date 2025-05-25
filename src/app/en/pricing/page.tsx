'use client';

import AIAssistant from '../../../components/AIAssistant';


export default function PriceCalculator() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-[100px] pb-20 text-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat">
        Construction Pricing
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* === BLOCK 1: PRICES === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4">Approximate Prices (BGN)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
            <li>Shell construction – by gross built-up area: from 500 BGN/m²</li>
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
          <p className="text-xs mt-4 text-gray-500 italic">
            Prices are indicative and subject to clarification after site inspection and meeting.
          </p>
        </div>

        {/* === BLOCK 2: AI ESTIMATOR === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">AI Estimator</h3>
          <AIAssistant lang="en" />

        </div>

        {/* === BLOCK 3: INQUIRY FORM === */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow h-full min-h-[620px] flex flex-col justify-start">
          <h3 className="text-lg font-bold text-center mb-2 text-blue-900">Request a Quote</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Describe your project..."
              rows={4}
              className="p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
