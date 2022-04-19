const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: ['.5rem', { lineHeight: '.55rem' }],
        semitiny: ['.6rem', { lineHeight: '.65rem' }]
      },
      colors: {
        primary: '#5458F7',
        'primary-light': '#a9abfa',
        'primary-transparent': '#F1F2FF',
        'primary-text': '#ffffff',
        accent: '#FF0000'
      },
      gridTemplateRows: {
        'layout': 'min-content auto min-content'
      }
    },
  },
  plugins: [],
}
