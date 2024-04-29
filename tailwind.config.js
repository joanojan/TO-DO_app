/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    screens: {
      mb: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'mario-dark': "url('/src/assets/background/mario-dark.jpg')",
        'mario-light': "url('/src/assets/background/mario-light.jpg')"
      }
    }
  },
  plugins: []
}
