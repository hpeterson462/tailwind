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
      backgroundImage: theme => ({
        'dots': "url('/src/assets/dots.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
