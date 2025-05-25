"use client";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="font-inter mx-auto max-w-screen-xl space-y-12 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="font-montserrat text-center text-3xl font-bold text-blue-900 md:text-4xl">
        Unsere Dienstleistungen
      </h1>

      {/* Einleitung – Boutique-Bau */}
      <section className="mx-auto max-w-3xl space-y-4 text-center text-gray-700">
        <p>
          <strong>ERMA – FAMILIEN GmbH</strong> ist auf{" "}
          <strong>Boutique-Bau</strong> spezialisiert, ausgerichtet auf Kunden,
          die Wert auf Qualität, persönliche Betreuung und nachhaltiges Bauen
          legen.
        </p>
        <p>
          Wir bevorzugen die Arbeit an{" "}
          <strong>
            privaten Häusern (von der Grundplatte bis schlüsselfertig)
          </strong>{" "}
          und <strong>kleinen Wohnanlagen</strong>, bei denen wir
          maßgeschneiderte Lösungen und handwerkliches Können anwenden können.
          Auf Wunsch des Kunden können wir auch ein <strong>Smart Home</strong>{" "}
          realisieren – mit automatischer Beleuchtung, Klimatisierung,
          Sicherheit und Steuerung per App.
        </p>
      </section>

      {/* Gebäude bauen */}
      <section className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🏗️ Gebäudeerrichtung
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Planung und Bau von Wohn- und Geschäftshäusern</li>
            <li>Ausführung von Rohbau- und Ausbauarbeiten</li>
            <li>Montage von Fassadensystemen und Dachkonstruktionen</li>
            <li>Installation von Elektro- und Sanitäranlagen</li>
            <li>Projektmanagement und technische Bauaufsicht</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/building.jpg"
            alt="Gebäudeerrichtung"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>

      {/* Innenausbau */}
      <section className="mb-12 flex flex-col items-center gap-10 lg:flex-row-reverse">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            🛠️ Innenausbau
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Spachtelarbeiten, Malerarbeiten und dekorative Putze</li>
            <li>Verlegung von Fußböden – Parkett, Laminat, Fliesen</li>
            <li>Montage von abgehängten Decken und Gipskarton</li>
            <li>Installation von Beleuchtung und Elektroausstattung</li>
            <li>Möblierung und Innenarchitektur nach Projekt</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/services/interior.png"
            alt="Innenausbau"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
