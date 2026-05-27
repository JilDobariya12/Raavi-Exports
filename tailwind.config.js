/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#3E2723', // Deep Coffee
          800: '#4E342E',
          700: '#5D4037', // Rich Brown
          600: '#6D4C41',
          500: '#795548',
          400: '#8D6E63', // Warm Cinnamon
          300: '#A1887F',
          200: '#BCAAA4',
          100: '#D7CCC8',
          50: '#EFEBE9',
        },
        cream: {
          500: '#F5F5DC', // Soft Cream
          400: '#FDF5E6',
          300: '#FAF0E6',
          200: '#FFF8DC',
          100: '#FFFFF0', // Warm Ivory
        },
        beige: {
          500: '#F5F5DC',
          400: '#F5F5DC',
        },
        gold: {
          600: '#B8860B', // Muted Gold
          500: '#DAA520',
          400: '#FFD700',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spice-gradient': 'linear-gradient(to right, #3E2723, #5D4037, #8D6E63)',
      }
    },
  },
  plugins: [],
}
