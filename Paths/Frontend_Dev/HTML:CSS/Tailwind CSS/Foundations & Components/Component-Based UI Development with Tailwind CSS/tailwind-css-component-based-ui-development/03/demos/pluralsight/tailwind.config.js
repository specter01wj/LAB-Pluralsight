/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css}'],
  theme: {
    extend: {
      colors: {
        'ps-background': '#1B1834',
        'ps-form-border': '#6854D8',
        'ps-text': '#D1D2E6',
        'ps-placeholder-text': '#8B90C1'
      }
    },
    fontFamily: {
      'sans': ['PS Commons', 'Arial', 'sans-serif'],
      'serif': ['Garamond', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
