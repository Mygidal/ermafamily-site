"use client";

import { useState } from "react";

export default function PriceCalculator() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    if (file) data.append("attachment", file);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFile(null);
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 pb-20 pt-[100px] text-blue-900">
      <h2 className="font-montserrat mb-10 text-center text-3xl font-bold md:text-4xl">
        Цени на строителство
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        {/* === БЛОК 1: ЦЕНИ === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-4 text-xl font-semibold">
            Ориентировъчни цени (лв.)
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Груб строеж – от 500 лв./м²</li>
            <li>Довършване до ключ: от 900 до 1200 лв./м²</li>
            <li>Изкоп и извозване: около 60 лв./м³</li>
            <li>Плоча + колони: около 400 лв./м²</li>
            <li>HPL фасада: около 240 лв./м²</li>
          </ul>
          <p className="mt-4 text-xs italic text-gray-500">
            Цените са ориентировъчни и подлежат на уточнение след оглед и среща.
          </p>
        </div>

        {/* === БЛОК 3: ФОРМА === */}
        <div className="flex h-full min-h-[620px] flex-col justify-start rounded-lg border border-gray-200 bg-white p-6 shadow">
          <h3 className="mb-2 text-center text-lg font-bold text-blue-900">
            Запитване
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              placeholder="Вашето име"
              className="rounded border p-2"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Имейл"
              className="rounded border p-2"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className="rounded border p-2"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Опишете проекта..."
              rows={4}
              className="rounded border p-2"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="rounded border p-2"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
            >
              {status === "sending" ? "Изпраща..." : "Изпрати"}
            </button>

            {status === "success" && (
              <p className="mt-2 text-sm text-green-600">
                ✅ Съобщението е изпратено успешно!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-600">
                ⚠️ Грешка при изпращане. Опитайте отново.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
