/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: 'var(--color-brand-orange)',
          cream: 'var(--color-brand-cream)',
          black: 'var(--color-brand-black)',
        }
      },
      fontFamily: {
        drose: ['Drose', 'Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
