'use client';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="pt-[80px] px-4 max-w-[800px] mx-auto text-gray-800 font-inter space-y-6">
      <h1 className="text-3xl font-bold font-montserrat text-blue-900 text-center mb-6">
        Общи условия
      </h1>

      <p>
        Тези Общи условия уреждат правилата за ползване на уебсайта на ЕРМА – ФАМИЛНА ООД, достъпен на <strong>ermafamily.bg</strong>.
        Използвайки този сайт, Вие се съгласявате с условията, посочени по-долу.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">1. Информация за фирмата</h2>
      <p>
        <strong>ЕРМА – ФАМИЛНА ООД</strong> е строителна компания, регистрирана в България със седалище:
        <br />
        <strong>Адрес:</strong> София, кв. „Овча купел“, ул. 692, №12
        <br />
        <strong>Email:</strong> office@ermafamily.bg
      </p>

      <h2 className="text-xl font-semibold text-blue-800">2. Авторски права</h2>
      <p>
        Цялото съдържание на този уебсайт – текстове, изображения, графики, лого и други – е обект на авторско право и не може да бъде копирано, разпространявано или използвано без изрично писмено съгласие от ЕРМА – ФАМИЛНА ООД.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">3. Отговорност</h2>
      <p>
        ЕРМА – ФАМИЛНА ООД не носи отговорност за вреди, причинени от използването или невъзможността за използване на уебсайта, включително в случай на неточности или технически грешки.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">4. Промени</h2>
      <p>
        Компанията си запазва правото да променя съдържанието, дизайна или условията на сайта по всяко време без предизвестие. Потребителите носят отговорност да се информират за актуализациите.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">5. Защита на лични данни</h2>
      <p>
        Обработката на лични данни се извършва в съответствие с{' '}
        <Link href="/privacy" className="text-blue-700 underline">
          Политиката за поверителност
        </Link>. Сайтът използва cookies за подобряване на функционалността.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">6. Контакти</h2>
      <p>
        За въпроси, свързани с общите условия, моля свържете се с нас на:
        <br />
        <strong>Email:</strong> office@ermafamily.bg
        <br />
        <strong>Телефон:</strong> +359 88 123 4567
      </p>
    </div>
  );
}
