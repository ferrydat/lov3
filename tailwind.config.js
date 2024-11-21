/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2647',
          hover: '#0D3158'
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#DAA520'
        }
      }
    },
  },
  plugins: [],
};