"use client";
import Image from "next/image";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Tsvetanka Stoilova Yoveva",
    position: "Gründerin & Co-Managerin",
    image: "/team/cvetanka.jpg",
  },
  {
    name: "Edi Boyanov Yovev",
    position: "Mitgründer, Technischer Leiter & Kranführer mit Lizenz",
    image: "/team/edi.jpg",
  },
  {
    name: "Monika Boyanova Yoveva",
    position: "Mitgründerin & Projektkoordinatorin",
    image: "/team/monika.jpg",
  },
  {
    name: "Andrey Alexandrov",
    position: "Leiter Rohbau",
    image: "/team/andrey.jpg",
  },
  {
    name: "Stefan Mitkov",
    position: "Leiter Ausbau",
    image: "/team/stefan.jpg",
  },
  {
    name: "Iliyanka Davidova",
    position: "Buchhaltung & Büroleitung",
    image: "/team/iliyana.jpg",
  },
];

export default function TeamPage() {
  useEffect(() => {
    const video = document.getElementById(
      "teamVideo",
    ) as HTMLVideoElement | null;
    const overlay = document.getElementById("videoOverlayText");

    if (video && overlay) {
      video.addEventListener("play", () => (overlay.style.display = "none"));
      video.addEventListener("pause", () => (overlay.style.display = "flex"));
    }
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="text-center text-3xl font-bold text-blue-900 md:text-4xl">
        UNSER TEAM
      </h1>

      <section className="mx-auto max-w-3xl space-y-4 text-center text-gray-700">
        <p>
          <strong>ERMA – FAMILIEN GmbH</strong> ist nicht einfach ein
          Bauunternehmen. Es ist ein <strong>lebendiger Stammbaum</strong>,
          eingebettet in Beton und bewahrt durch ehrliches Handwerk.
        </p>
        <p>
          Der Anfang wurde im <strong>Jahr 1994</strong> durch{" "}
          <strong>Tsvetanka Stoilova Yoveva</strong> gesetzt – Gründerin,
          Visionärin, Mutter. Inspiriert von ihrem Vater{" "}
          <strong>Stoil Trendafilov</strong> gründete sie ERMA und verband darin
          den Geist mehrerer Generationen von Handwerkern.
        </p>
      </section>

      <section className="space-y-4 text-gray-800">
        <h2 className="text-2xl font-bold text-blue-800">
          🧱 Die Region Tran – Wiege der Meister
        </h2>
        <p>
          Tsvetanka stammt aus der <strong>Region Tran</strong> – eine raue,
          majestätische Gegend, bekannt als{" "}
          <strong>
            Quelle einiger der besten Schalungsbauer und Bauarbeiter Bulgariens
          </strong>
          . Dort, wo der Stein spricht und das Handwerk angeboren ist.
        </p>
        <p>
          Ihr Vater, <strong>Stoil Trendafilov †</strong>, vermittelte nicht nur
          handwerkliche Werte, sondern hinterließ auch eine nationale Spur als{" "}
          <strong>Bauleiter des Nationalen Kulturpalasts (NDK)</strong> in
          Sofia.
        </p>
      </section>

      <section className="space-y-4 text-gray-800">
        <h2 className="text-2xl font-bold text-blue-800">
          🛠 Der Geist von Dupniza – Beständig und unternehmerisch
        </h2>
        <p>
          Tsvetankas Ehemann, <strong>Georgi Yovev †</strong>, stammt aus der{" "}
          <strong>Region Dupniza</strong>. Er gründete &quot;GECEBOMI&quot; GmbH
          – eines der führenden Bauunternehmen in Ostbulgarien mit Vision,
          Integrität und Ansehen.
        </p>
        <p>
          In dieser Tradition stand auch <strong>Alexander Alexandrov †</strong>{" "}
          – Altmeister im Rohbau aus Dupniza, langjähriger Gruppenleiter, Prüfer
          europäischer Projekte, mit zentraler Rolle beim{" "}
          <strong>Terminal 2 des Flughafens Sofia</strong> sowie vielen
          Infrastrukturprojekten. Sein Sohn <strong>Andrey Alexandrov</strong>{" "}
          leitet heute den Rohbau bei ERMA mit derselben Präzision und
          Verantwortung.
        </p>
        <p>
          Heute führen ihre Söhne – <strong>Boyan Georgiev Yovev</strong>{" "}
          (Investor und Partner durch &quot;H5M GROUP&quot; und &quot;HIKS 5
          GROUP&quot;) und <strong>Andrey Alexandrov</strong> – das Erbe fort.
        </p>
      </section>

      <section>
        <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-blue-800">
          👷 Unser aktuelles Team
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md transition hover:shadow-lg"
            >
              <div className="relative mb-4 size-[120px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full border-4 border-blue-200 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 space-y-6 text-center text-sm italic text-gray-500">
        <p>
          In Erinnerung an <strong>Stoil Trendafilov</strong> – Bauherr aus der
          Region Tran, Vater, Großvater, Urgroßvater und Bauleiter des NDK. Ein
          Meister mit Gewissen, ein Gründer mit Mission.
        </p>
        <p>
          In Erinnerung an <strong>Georgi Yovev</strong> – Bauunternehmer aus
          der Region Dupniza, Gründer von &quot;GECEBOMI&quot;, Ehemann, Vater
          und Inspiration.
        </p>
        <p>
          In Erinnerung an <strong>Alexander Alexandrov</strong> – Altmeister
          des Rohbaus aus Dupniza, Vater und Vorbild für Arbeit, Stärke und
          Treue zum Handwerk.
        </p>
      </section>
    </div>
  );
}
