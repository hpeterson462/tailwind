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
        'lightGray': '#454545',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
