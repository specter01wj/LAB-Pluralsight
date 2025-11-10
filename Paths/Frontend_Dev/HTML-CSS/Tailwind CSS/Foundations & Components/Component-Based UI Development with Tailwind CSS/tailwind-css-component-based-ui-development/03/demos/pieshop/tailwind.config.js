/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./pie-preset.js')
  ],
  theme: {
    extend: {
      colors: {
        'header': '#ff0000'
      }
    }
  },
  content: ['./src/**/*.{html,css}'],
  plugins: [],
}
