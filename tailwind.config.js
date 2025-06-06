/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'primary': '#FFDE59',
      'secondary': '#A6A6A6',
      'white': '#FFFFFF'
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      lineHeight: {
        '10': '3.5rem'
      }
    },
  },
  plugins: [
    // theme.colorsをscssから使用できるよう:rootを定義
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
        },
      });
    },
  ],
}

