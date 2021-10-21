module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ['Raleway', 'sans-serif'],
        body: ['Lora', 'serif']
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
