"use client";

import Image from "next/image";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Tsvetanka Stoilova Yoveva",
    position: "Founder & Co-manager",
    image: "/team/cvetanka.jpg",
  },
  {
    name: "Edi Boyanov Yovev",
    position: "Co-founder, Technical Manager and Licensed Tower Crane Operator",
    image: "/team/edi.jpg",
  },
  {
    name: "Monika Boyanova Yoveva",
    position: "Co-founder & Project Coordinator",
    image: "/team/monika.jpg",
  },
  {
    name: "Andrey Alexandrov",
    position: "Head of Structural Construction",
    image: "/team/andrey.jpg",
  },
  {
    name: "Stefan Mitkov",
    position: "Head of Finishing Works",
    image: "/team/stefan.jpg",
  },
  {
    name: "Iliyanka Davidova",
    position: "Accounting & Office Manager",
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
    <div className="font-inter mx-auto max-w-screen-xl space-y-8 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="font-montserrat text-center text-3xl font-bold text-blue-900 md:text-4xl">
        OUR TEAM
      </h1>

      <section className="mx-auto max-w-3xl space-y-4 text-center text-gray-700">
        <p>
          <strong>ERMA – FAMILY Ltd.</strong> is not just a construction
          company. It is a <strong>living legacy</strong>, embedded in concrete
          and preserved through honest craftsmanship.
        </p>
        <p>
          It all began in <strong>1994</strong> with{" "}
          <strong>Tsvetanka Stoilova Yoveva</strong> – founder, visionary, and
          mother. Inspired by her father <strong>Stoil Trendafilov</strong>, she
          founded ERMA, weaving in the spirit of generations of craftsmen.
        </p>
      </section>

      <section className="space-y-4 text-gray-800">
        <h2 className="text-2xl font-bold text-blue-800">
          🧱 Tran Region – Cradle of Builders
        </h2>
        <p>
          Tsvetanka comes from the <strong>Tran region</strong> – a raw and
          majestic area known as{" "}
          <strong>
            the source of some of Bulgaria&apos;s best formwork masters and
            builders
          </strong>
          . A place where the stone speaks and craftsmanship is inherited by
          birth.
        </p>
        <p>
          Her father, <strong>Stoil Trendafilov †</strong>, not only passed down
          the craft&apos;s values, but also left a mark in national history as{" "}
          <strong>
            head of the construction of the National Palace of Culture (NDK)
          </strong>{" "}
          in Sofia.
        </p>
      </section>

      <section className="space-y-4 text-gray-800">
        <h2 className="text-2xl font-bold text-blue-800">
          🛠 The Dupnitsa Spirit – Resilient and Visionary
        </h2>
        <p>
          Tsvetanka&apos;s husband, <strong>Georgi Yovev †</strong>, was from
          the <strong>Dupnitsa region</strong>. He founded &quot;GECEBOMI&quot;
          Ltd. – one of the leading companies in Eastern Bulgaria, built on
          vision, integrity, and respect.
        </p>
        <p>
          In that same tradition was <strong>Alexander Alexandrov †</strong> – a
          long-time technical team leader from Dupnitsa, inspector for European
          projects, and key contributor to{" "}
          <strong>Sofia Airport Terminal 2</strong> and many infrastructure
          projects. His son, <strong>Andrey Alexandrov</strong>, now leads
          ERMA&apos;s structural division with the same precision and
          responsibility.
        </p>
        <p>
          Today, their sons – <strong>Boyan Georgiev Yovev</strong> (investor
          and partner via &quot;H5M GROUP&quot; and &quot;HIKS 5 GROUP&quot;)
          and <strong>Andrey Alexandrov</strong> – continue their legacy.
        </p>
      </section>

      <section>
        <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-blue-800">
          👷 Our Current Team
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
          In memory of <strong>Stoil Trendafilov</strong> – builder from the
          Tran region, father, grandfather, great-grandfather, and head of the
          NDK project. A master of conscience, a founder by mission.
        </p>
        <p>
          In memory of <strong>Georgi Yovev</strong> – builder and entrepreneur
          from Dupnitsa, founder of &quot;GECEBOMI&quot;, husband, father, and
          inspiration.
        </p>
        <p>
          In memory of <strong>Alexander Alexandrov</strong> – a leader in
          structural construction from Dupnitsa, father, and an example of
          dedication, strength, and loyalty to the craft.
        </p>
      </section>
    </div>
  );
}
