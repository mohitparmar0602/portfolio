/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Italiana', 'serif'],
      },
      colors: {
        'brand-green': '#243C34',
        'brand-cream': '#F3EEE5',
        'brand-accent': '#E9C46A',
        'brand-dark': '#121212',
      }
    },
  },
  plugins: [],
}
