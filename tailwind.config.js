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
        serif: ['Young Serif', 'serif'],
        accent: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        'behance-cream': '#F5F1E6',
        'behance-sage': '#678949',
        'behance-teal': '#3a6865',
        'behance-mustard': '#fcbd59',
        'behance-coral': '#e76b6b',
        'behance-dark': '#121212',
        // Legacy colors kept for compatibility during migration
        'brand-green': '#243C34',
        'brand-cream': '#F3EEE5',
        'brand-accent': '#E9C46A',
        'brand-dark': '#121212',
      }
    },
  },
  plugins: [],
}
