/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'md': {'raw': '(min-width: 768px) and (orientation: landscape)'},
        'lg': {'raw': '(min-width: 1024px) and (orientation: landscape)'},
        'xl': {'raw': '(min-width: 1280px) and (orientation: landscape)'},
        '2xl': {'raw': '(min-width: 1536px) and (orientation: landscape)'},
      },
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
