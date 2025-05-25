/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-unnecessary-arbitrary-value": "warn",
    "@next/next/no-img-element": "warn",
    "react/no-unescaped-entities": "error"
  },
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      removeDuplicates: true,
      whitelist: ["font-inter", "font-montserrat"]
    }
  }
}
