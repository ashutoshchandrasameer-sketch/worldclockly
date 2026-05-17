/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 This configuration scans ALL subfolders, including src/routes/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}