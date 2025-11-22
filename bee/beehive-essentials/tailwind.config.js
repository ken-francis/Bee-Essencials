/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B',     // Honey yellow
        secondary: '#713F12',   // Hive brown
        accent: '#16A34A',      // Nature green
        'neutral-dark': '#1F2937',
        'neutral-light': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}