import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        headline: ['Poppins', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        lp: { max: '1440px' },
        tl: { max: '1199px' },
        tp: { max: '1023px' },
        ph: { max: '767px' },
      },
      spacing: {
        23: '5.75rem',
      },
    },
  },
  plugins: [],
}
