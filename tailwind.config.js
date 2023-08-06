/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/preline/dist/*.js',
  ],
  // prefix: 'hs-',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Patrick Hand", "Arial", "sans-serif"],
        'hack': ["Hack", "Arial", "sans-serif"],
      },
      colors: {
        'dropColor': '#3b7ae3',
        'primary': '#B5D2CB',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1080px'
        }
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
