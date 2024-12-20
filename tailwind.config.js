/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#743D77', 
        secundaryPurple: '#111827'
      },
    },
  },
  plugins: [],
}

