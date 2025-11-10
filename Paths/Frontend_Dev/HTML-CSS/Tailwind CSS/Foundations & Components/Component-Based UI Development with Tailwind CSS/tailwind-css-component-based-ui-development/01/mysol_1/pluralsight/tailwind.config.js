/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [['./src/**/*.{html,css}']],
  theme: {
    extend: {
      colors: {
        'ps-purple-light': '#A5AAD0',
        'ps-purple-dark': '#140F25',
        'ps-bubble': '#2F3059',
        'ps-yellow-highlight': '#FFCF3E',
        'ps-nav-selected': '#404377',
        'ps-nav-selected-border': '#FE1676',
        'ps-nav-purple': '#232145'
      }
    },
    fontFamily: {
      'sans': ['PS Commons', 'Arial', 'sans-serif'],
      'serif': ['Garamond', 'serif']
    }
  },
  plugins: [],
}
