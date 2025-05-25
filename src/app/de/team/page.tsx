'use client';
import Image from 'next/image';
import { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Tsvetanka Stoilova Yoveva',
    position: 'Gründerin & Co-Managerin',
    image: '/team/cvetanka.jpg',
  },
  {
    name: 'Edi Boyanov Yovev',
    position: 'Mitgründer, Technischer Leiter & Kranführer mit Lizenz',
    image: '/team/edi.jpg',
  },
  {
    name: 'Monika Boyanova Yoveva',
    position: 'Mitgründerin & Projektkoordinatorin',
    image: '/team/monika.jpg',
  },
  {
    name: 'Andrey Alexandrov',
    position: 'Leiter Rohbau',
    image: '/team/andrey.jpg',
  },
  {
    name: 'Stefan Mitkov',
    position: 'Leiter Ausbau',
    image: '/team/stefan.jpg',
  },
  {
    name: 'Iliyanka Davidova',
    position: 'Buchhaltung & Büroleitung',
    image: '/team/iliyana.jpg',
  },
];

export default function TeamPage() {
  useEffect(() => {
    const video = document.getElementById('teamVideo') as HTMLVideoElement | null;
    const overlay = document.getElementById('videoOverlayText');

    if (video && overlay) {
      video.addEventListener('play', () => (overlay.style.display = 'none'));
      video.addEventListener('pause', () => (overlay.style.display = 'flex'));
    }
  }, []);

  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[1280px] mx-auto text-gray-800 font-inter space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 text-center">
        UNSER TEAM
      </h1>

      <section className="text-center max-w-3xl mx-auto space-y-4 text-gray-700">
        <p>
          <strong>ERMA – FAMILIEN GmbH</strong> ist nicht einfach ein Bauunternehmen. Es ist ein <strong>lebendiger Stammbaum</strong>, eingebettet in Beton und bewahrt durch ehrliches Handwerk.
        </p>
        <p>
          Der Anfang wurde im <strong>Jahr 1994</strong> durch <strong>Tsvetanka Stoilova Yoveva</strong> gesetzt – Gründerin, Visionärin, Mutter. Inspiriert von ihrem Vater <strong>Stoil Trendafilov</strong> gründete sie ERMA und verband darin den Geist mehrerer Generationen von Handwerkern.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🧱 Die Region Tran – Wiege der Meister</h2>
        <p>
          Tsvetanka stammt aus der <strong>Region Tran</strong> – eine raue, majestätische Gegend, bekannt als <strong>Quelle einiger der besten Schalungsbauer und Bauarbeiter Bulgariens</strong>. Dort, wo der Stein spricht und das Handwerk angeboren ist.
        </p>
        <p>
          Ihr Vater, <strong>Stoil Trendafilov †</strong>, vermittelte nicht nur handwerkliche Werte, sondern hinterließ auch eine nationale Spur als <strong>Bauleiter des Nationalen Kulturpalasts (NDK)</strong> in Sofia.
        </p>
      </section>

      <section className="text-gray-800 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">🛠 Der Geist von Dupniza – Beständig und unternehmerisch</h2>
        <p>
          Tsvetankas Ehemann, <strong>Georgi Yovev †</strong>, stammt aus der <strong>Region Dupniza</strong>. Er gründete „GECEBOMI“ GmbH – eines der führenden Bauunternehmen in Ostbulgarien mit Vision, Integrität und Ansehen.
        </p>
        <p>
          In dieser Tradition stand auch <strong>Alexander Alexandrov †</strong> – Altmeister im Rohbau aus Dupniza, langjähriger Gruppenleiter, Prüfer europäischer Projekte, mit zentraler Rolle beim <strong>Terminal 2 des Flughafens Sofia</strong> sowie vielen Infrastrukturprojekten. Sein Sohn <strong>Andrey Alexandrov</strong> leitet heute den Rohbau bei ERMA mit derselben Präzision und Verantwortung.
        </p>
        <p>
          Heute führen ihre Söhne – <strong>Boyan Georgiev Yovev</strong> (Investor und Partner durch „H5M GROUP“ und „HIKS 5 GROUP“) und <strong>Andrey Alexandrov</strong> – das Erbe fort.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 text-center mt-12 mb-6">👷 Unser aktuelles Team</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-4 shadow-md rounded-lg bg-white hover:shadow-lg transition"
            >
              <div className="relative w-[120px] h-[120px] mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-blue-200"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 text-center text-sm text-gray-500 italic space-y-6">
        <p>
          In Erinnerung an <strong>Stoil Trendafilov</strong> – Bauherr aus der Region Tran, Vater, Großvater, Urgroßvater und Bauleiter des NDK. Ein Meister mit Gewissen, ein Gründer mit Mission.
        </p>
        <p>
          In Erinnerung an <strong>Georgi Yovev</strong> – Bauunternehmer aus der Region Dupniza, Gründer von „GECEBOMI“, Ehemann, Vater und Inspiration.
        </p>
        <p>
          In Erinnerung an <strong>Alexander Alexandrov</strong> – Altmeister des Rohbaus aus Dupniza, Vater und Vorbild für Arbeit, Stärke und Treue zum Handwerk.
        </p>
      </section>
    </div>
  );
}
