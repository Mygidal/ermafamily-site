'use client';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        Our Services
      </h1>

      {/* Introduction – Boutique Construction */}
      <section className="text-gray-700 text-center max-w-3xl mx-auto space-y-4">
        <p>
          <strong>ERMA – FAMILY Ltd.</strong> specializes in <strong>boutique construction</strong>,
          focused on clients who value quality, personalized service, and sustainable building.
        </p>
        <p>
          We prefer to work on <strong>private homes (from foundation to turnkey)</strong> and <strong>small residential buildings</strong>,
          where we can apply custom solutions and a craftsmanship approach.  
          Upon request, we can also build a <strong>smart home</strong> – with automated lighting, climate, security, and mobile control.
        </p>
      </section>

      {/* Building Construction */}
      <section className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🏗️ Building Construction</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Design and construction of residential and commercial buildings</li>
            <li>Execution of structural work and finishing works</li>
            <li>Installation of facade systems and roofing structures</li>
            <li>Installation of electrical and plumbing systems</li>
            <li>Construction project management and technical supervision</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/building.jpg"
            alt="Building Construction"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Interior Finishing Works */}
      <section className="flex flex-col lg:flex-row-reverse gap-10 items-center mb-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🛠️ Interior Finishing Works</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Plastering, painting, and decorative plasters</li>
            <li>Flooring installation – parquet, laminate, tile</li>
            <li>Installation of suspended ceilings and drywall</li>
            <li>Lighting and electrical equipment installation</li>
            <li>Furnishing and interior design by project</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/interior.png"
            alt="Interior Finishing Works"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
