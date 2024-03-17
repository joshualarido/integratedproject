/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

