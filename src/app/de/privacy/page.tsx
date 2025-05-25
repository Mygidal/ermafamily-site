export default function PrivacyPage() {
  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[800px] mx-auto text-gray-800 font-inter space-y-6">
      <h1 className="text-3xl font-bold font-montserrat text-blue-900 text-center mb-6">
        Datenschutzrichtlinie
      </h1>

      <p><strong>Letzte Aktualisierung:</strong> [Datum einfügen]</p>

      <p>
        <strong>ERMA – FAMILIEN GmbH</strong> verpflichtet sich zum Schutz der persönlichen Daten ihrer Kunden, Partner und Website-Besucher.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">1. Welche Informationen sammeln wir?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name, E-Mail-Adresse, Telefonnummer (über Kontaktformular)</li>
        <li>Technische Informationen: IP-Adresse, Browser, Gerätetyp</li>
        <li>Nutzungsdaten durch Cookies</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">2. Wie verwenden wir Ihre Daten?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Zur Beantwortung von Anfragen und Nachrichten</li>
        <li>Zur Verbesserung der Benutzererfahrung</li>
        <li>Zur Analyse und Wartung der Website</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">3. Weitergabe von Informationen</h2>
      <p>
        Wir verkaufen, verbreiten oder geben keine persönlichen Daten an Dritte weiter,
        es sei denn, dies ist gesetzlich vorgeschrieben oder zur Vertragserfüllung mit Ihrer Zustimmung notwendig.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">4. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies zur Analyse des Datenverkehrs und zur Verbesserung der Funktionalität.
        Sie haben das Recht, Cookies über Ihre Browsereinstellungen zu deaktivieren.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">5. Ihre Rechte</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Anforderung von Zugriff auf Ihre Daten</li>
        <li>Korrektur oder Löschung bereitgestellter Informationen</li>
        <li>Widerruf Ihrer Einwilligung zur Datenverarbeitung</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">6. Sicherheit</h2>
      <p>
        Wir setzen administrative, technische und physische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">7. Kontakt</h2>
      <p>
        Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte:
      </p>
      <ul className="pl-5">
        <li>📩 <strong>E-Mail:</strong> office@ermafamily.bg</li>
        <li>📍 <strong>Adresse:</strong> Sofia, Stadtteil Ovcha Kupel, Straße 692, Nr. 12</li>
      </ul>
    </div>
  );
}
