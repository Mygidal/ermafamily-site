'use client';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        Unsere Dienstleistungen
      </h1>

      {/* Einleitung – Boutique-Bau */}
      <section className="text-gray-700 text-center max-w-3xl mx-auto space-y-4">
        <p>
          <strong>ERMA – FAMILIEN GmbH</strong> ist auf <strong>Boutique-Bau</strong> spezialisiert,
          ausgerichtet auf Kunden, die Wert auf Qualität, persönliche Betreuung und nachhaltiges Bauen legen.
        </p>
        <p>
          Wir bevorzugen die Arbeit an <strong>privaten Häusern (von der Grundplatte bis schlüsselfertig)</strong> und <strong>kleinen Wohnanlagen</strong>,
          bei denen wir maßgeschneiderte Lösungen und handwerkliches Können anwenden können.  
          Auf Wunsch des Kunden können wir auch ein <strong>Smart Home</strong> realisieren – mit automatischer Beleuchtung, Klimatisierung, Sicherheit und Steuerung per App.
        </p>
      </section>

      {/* Gebäude bauen */}
      <section className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🏗️ Gebäudeerrichtung</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
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
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Innenausbau */}
      <section className="flex flex-col lg:flex-row-reverse gap-10 items-center mb-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">🛠️ Innenausbau</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
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
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
