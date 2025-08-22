/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        atl: {
          primary: "#0ea5e9",
          dark: "#0b3954",
          accent: "#22c55e"
        }
      }
    }
  },
  plugins: []
}
