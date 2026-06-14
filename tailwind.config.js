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
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        brand: {
          orange: 'rgb(var(--color-brand-orange) / <alpha-value>)',
          cream: 'rgb(var(--color-brand-cream) / <alpha-value>)',
          black: 'rgb(var(--color-brand-black) / <alpha-value>)',
          cyan: 'rgb(var(--color-brand-cyan) / <alpha-value>)',
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
