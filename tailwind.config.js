/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      padding: {
        "pr-calc": "calc(var(--bs-gutter-x) * 0.5)",
      },
      backgroundImage: {
        "service-01": "url('/services/service-01.jpg')",
        "service-02": "url('/services/service-02.jpg')",
        "service-03": "url('/services/service-03.jpg')",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/typography")],
};
