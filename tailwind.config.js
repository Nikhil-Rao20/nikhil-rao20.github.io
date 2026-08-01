/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
    visibility: false,
    container: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

