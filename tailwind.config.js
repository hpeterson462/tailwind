const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'header': ['Raleway', 'ui-sans-serif'],
        'body': ['Lora', 'ui-serif']
      },
      textColor: {
        'lightBlue': '#7cd6dc',
        'darkGray': '#454545'
      },
      backgroundImage: theme => ({
        'dots': "url('/src/assets/dots.png')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'lightBlue': '#7cd6dc',
        'darkGray': '#373737',
        'lightGray': '#c7c7c7'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [plugin(function ({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.7xl') },
      'h3': { fontSize: theme('fontSize.3xl') },
    })
  })],
}
