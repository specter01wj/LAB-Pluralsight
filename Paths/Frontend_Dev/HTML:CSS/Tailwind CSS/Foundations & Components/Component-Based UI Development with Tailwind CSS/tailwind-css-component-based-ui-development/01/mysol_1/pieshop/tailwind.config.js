/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css}'],
  theme: {
    extend: {
      colors: {
        'header': '#C87D53',
        'page-background': '#FDF5F4',
        'delete-button': '#9A9794',
        'action-button': '#FECFC9'
      },
      spacing: {
        'container': '20px'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
        'serif': ['Garamond', 'serif']
      }
    },
  },
  plugins: [],
}
