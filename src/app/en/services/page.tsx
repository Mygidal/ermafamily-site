"use client";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="font-inter mx-auto max-w-screen-xl space-y-12 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="font-montserrat text-center text-3xl font-bold text-blue-900 md:text-4xl">
        Our Services
      </h1>

      {/* Introduction – Boutique Construction */}
      <section className="mx-auto max-w-3xl space-y-4 text-center text-gray-700">
        <p>
          <strong>ERMA – FAMILY Ltd.</strong> specializes in{" "}
          <strong>boutique construction</strong>, focused on clients who value
          quality, personalized service, and sustainable building.
        </p>
        <p>
          We prefer to work on{" "}
          <strong>private homes (from foundation to turnkey)</strong> and{" "}
          <strong>small residential buildings</strong>, where we can apply
          custom solutions and a craftsmanship approach. Upon request, we can
          also build a <strong>smart home</strong> – with automated lighting,
          climate, security, and mobile control.
        </p>
      </section>

      {/* Building Construction */}
      <section className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🏗️ Building Construction
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>
              Design and construction of residential and commercial buildings
            </li>
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
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>

      {/* Interior Finishing Works */}
      <section className="mb-12 flex flex-col items-center gap-10 lg:flex-row-reverse">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🛠️ Interior Finishing Works
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
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
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
