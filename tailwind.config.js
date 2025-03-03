module.exports = {

  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        'halfscreen': '50vh',
        '1/2': '50%'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  animation: {
    shine: "shine 1s",
  },
  keyframes: {
    shine: {
      "100%": { left: "125%" },
    },
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
    require('ps-scrollbar-tailwind'),
  ]
};
