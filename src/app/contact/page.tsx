export default function ContactPage() {
  return (
    <div className="pt-[80px] px-4 max-w-[1280px] mx-auto">
      {/* Заглавие */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-blue-900 mb-2">
          Свържете се с нас
        </h1>
        <p className="text-base md:text-lg text-gray-600 font-inter">
          Ще се радваме да отговорим на вашите въпроси!
        </p>
      </div>

      {/* Форма + Контактна информация */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Форма */}
        <form className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Вашето име"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Вашият имейл"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <input
            type="tel"
            placeholder="Телефон"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <textarea
            placeholder="Съобщение"
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Изпрати
          </button>
        </form>

        {/* Инфо */}
        <div className="flex-1 text-sm text-gray-700 space-y-4">
          <div>
            <h3 className="font-bold text-base text-blue-900">Адрес</h3>
            <a
              href="https://www.google.bg/maps/place/кв.+Овча+купел,+ул.+„692-ра“+12,+1618+София/@42.6777594,23.2508653,799m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40aa9b2fe0506391:0x58036b9c19288a11!8m2!3d42.6777556!4d23.2557362"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-800"
            >
              София, кв. „Овча купел“, ул. 692, №12
            </a>
          </div>
          <div>
            <h3 className="font-bold text-base text-blue-900">Телефон</h3>
            <p>+359 88 123 4567</p>
          </div>
          <div>
            <h3 className="font-bold text-base text-blue-900">Имейл</h3>
            <p>office@ermafamily.bg</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61564031771496" target="_blank" rel="noopener noreferrer">
              <img src="/icon-facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icon-instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Карта */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2826935786565!2d23.2642711!3d42.668168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85b2b36d1ad1%3A0xe0fd274d9ba2a43b!2z0J7QntCeICLQotC10YDQutC-0LLQtdGAIg!5e0!3m2!1sbg!2sbg!4v1716200000000"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Работно време */}
      <div className="text-center text-sm text-gray-600">
        <p className="font-semibold text-blue-900">Работно време:</p>
        <p>Понеделник – Петък: 09:00 – 18:00</p>
        <p>Събота – Неделя: Почивни дни</p>
      </div>
    </div>
  );
}
