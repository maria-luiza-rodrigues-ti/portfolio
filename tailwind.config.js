/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fromGradient: "hsla(331, 93%, 48%, 1)",
        toGradient: "hsla(25, 100%, 50%, 1)",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade', 'black'],
  },
};
