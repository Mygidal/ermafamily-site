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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    if (file) data.append("attachment", file);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const responseData = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFile(null);
      } else {
        setStatus("error");
        setErrorMessage(
          responseData.message || "Неизвестна грешка при изпращане.",
        );
      }
    } catch (err) {
      console.error("❌ Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Проблем с връзката към сървъра. Опитайте отново по-късно.",
      );
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

          <h4 className="mb-1 mt-4 font-semibold">I. Кофражни работи</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Фундаменти – от 29.00 лв/м²</li>
            <li>Вертикали – от 39.00 лв/м²</li>
            <li>Плочи – от 35.00 лв/м²</li>
            <li>Кофраж за стълбища – от 48.00 лв/м²</li>
          </ul>

          <h4 className="mb-1 mt-4 font-semibold">II. Арматурни работи</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Всички видове – от 1.40 лв/кг</li>
          </ul>

          <h4 className="mb-1 mt-4 font-semibold">III. Бетонови работи</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Подложен бетон – от 32.00 лв/м²</li>
            <li>Фундаменти – от 23.00 лв/м²</li>
            <li>Плочи и стълбища – от 30.00 лв/м²</li>
            <li>Плочи, греди и др. – от 32.00 лв/м²</li>
            <li>Колони и шайби – от 32.00 лв/м²</li>
          </ul>

          <h4 className="mb-1 mt-4 font-semibold">IV. Зидария</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>Тухлена зидария 25 см – от 29.00 лв/м² (труд)</li>
            <li>Тухлена зидария 12 см – от 29.00 лв/м² (труд)</li>
          </ul>

          <p className="mt-4 text-xs italic text-gray-500">
            Всички посочени цени са без ДДС ориентировъчни и са само за труд.
            Материалите не са включени. За точна оферта се извършва оглед и
            количествена сметка.
          </p>

          <h4 className="mb-1 mt-4 font-semibold">
            IV. Довършителни работи и изолации
          </h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            {/* Замазки и шпакловки */}
            <li>Циментова замазка – от 19.00 лв/м²/включва материал/</li>
            <li>Гипсова машинна мазилка – от 19.00 лв/м²/включва материал/</li>
            <li>
              Фина шпакловка (Sheetrock) – от 16.00 лв/м²/включва материал/
            </li>

            {/* Боя и настилки */}
            <li>Боядисване с латекс (двукратно) – от 9.00 лв/м²</li>
            <li>Лепене на гранитогрес/фаянс – от 68.00 лв/м²</li>
            <li>Монтаж на ламинат – от 14.00 лв/м²</li>

            {/* Санитария и гипсокартон */}
            <li>Монтаж на санитария – от 100.00 лв/брой</li>
            <li>Окачен таван (гипскартон) – от 55.00 лв/м²</li>

            {/* Изолации */}

            <li>Хидроизолация на покрив – от 19.00 лв/м²</li>
            <li>Топлоизолация EPS – от 62.00 лв/м²</li>
            <li>Топлоизолация XPS (сокъл, цокъл) – от 68.00 лв/м²</li>
            <li>Минерална вата с фасадна система – от 95.00 лв/м²</li>
          </ul>

          <p className="mt-4 text-xs italic text-gray-500">
            Цените са без ДДС, ориентировъчни и подлежат на уточнение след оглед
            и среща.
          </p>
        </div>

        {/* === БЛОК 2: ФОРМА === */}
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
                ⚠️ Грешка при изпращане: {errorMessage || "Опитайте отново."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
