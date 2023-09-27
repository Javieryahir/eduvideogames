/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-100':'#1A237E',
        'primary-200':'#534bae',
        'primary-300':'#b8a6ff',
        'accent-100':'#536DFE',
        'accent-200':'#ffffff',
        'bg-100':'#0F1C3F',
        'bg-200':'#212b50',
        'bg-300':'#3b426a',// Cambia '#ff0000' al código de color deseado
      },
      color: {
        'text-100':'#FFFFFF',
        'text-200':'#e0e0e0'
      }
    },
  },
  plugins: [],
}



