module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'custom-color': '#000000', // Ersetzen Sie #000000 durch Ihre gewünschte Farbe
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};