/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // всички компоненти и страници
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',     // тъмносиньо
        secondary: '#facc15',   // златисто
        dark: '#0f172a',        // футър
        light: '#f1f5f9',       // светъл фон
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],         // основен текст
        heading: ['var(--font-montserrat)', 'sans-serif'], // заглавия
      },
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.png')", // фон за цялата страница
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};

