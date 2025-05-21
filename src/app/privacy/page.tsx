export default function PrivacyPage() {
  return (
    <div className="pt-[100px] pb-10 px-4 max-w-[800px] mx-auto text-gray-800 font-inter space-y-6">
      <h1 className="text-3xl font-bold font-montserrat text-blue-900 text-center mb-6">
        Политика за поверителност
      </h1>

      <p><strong>Последна актуализация:</strong> [въведи дата]</p>

      <p>
        <strong>ЕРМА – ФАМИЛНА ООД</strong> се ангажира да защитава личната информация на своите клиенти, партньори и посетители на уебсайта.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">1. Каква информация събираме?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Име, имейл адрес, телефонен номер (чрез контактна форма)</li>
        <li>Техническа информация: IP адрес, браузър, тип устройство</li>
        <li>Данни, свързани с използването на сайта чрез „бисквитки“ (cookies)</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">2. Как използваме Вашата информация?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>За да отговорим на запитвания и заявки</li>
        <li>За подобряване на потребителското изживяване</li>
        <li>За анализ и поддръжка на сайта</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">3. Споделяне на информация</h2>
      <p>
        Ние не продаваме, не разпространяваме и не предоставяме лична информация на трети страни,
        освен ако това не се изисква по закон или за изпълнение на наши договорни задължения с Ваше съгласие.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">4. „Бисквитки“ (Cookies)</h2>
      <p>
        Нашият сайт използва „бисквитки“, за да анализира трафика и да подобри функционалността.
        Имате право да ги изключите чрез настройките на браузъра си.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">5. Вашите права</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Да поискате достъп до Вашите данни</li>
        <li>Да коригирате или изтриете предоставена информация</li>
        <li>Да оттеглите съгласие за обработка</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">6. Сигурност</h2>
      <p>
        Прилагаме административни, технически и физически мерки за защита на Вашата информация от неоторизиран достъп.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">7. Контакти</h2>
      <p>
        Ако имате въпроси относно поверителността, моля, свържете се с нас:
      </p>
      <ul className="pl-5">
        <li>📩 <strong>Email:</strong> office@ermafamily.bg</li>
        <li>📍 <strong>Адрес:</strong> София, кв. „Овча купел“, ул. 692, №12</li>
      </ul>
    </div>
  );
}
