/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: 'rgb(var(--color-brand-orange) / <alpha-value>)',
          cream: 'rgb(var(--color-brand-cream) / <alpha-value>)',
          black: 'rgb(var(--color-brand-black) / <alpha-value>)',
        }
      },
      fontFamily: {
        drose: ['"Bebas Neue"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
