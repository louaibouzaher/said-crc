module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterBold","Arial", "sans-serif"],
        interBold: ["InterBold"],
        inter: ["inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
