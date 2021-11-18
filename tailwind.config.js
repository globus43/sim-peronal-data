const tailwindcss = require('tailwindcss');

module.exports = {
  purge: {
    enabled: true,
    options: {
      keyframes: true,
      fontFace: true,
      variables: true,
      rejected: true,
    },
    content: [
      './**/*.{htm*,js}',
      './index.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
