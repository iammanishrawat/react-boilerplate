/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4FC9DA',
        secondary: '#AECC34',
        text: '#292929',
        border: '#5a5a5a',
        background: '#e5e5e5'
      },
    },
  },
  plugins: [],
}
