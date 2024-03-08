/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundMain': '#ffffff',
        'backgroundList': '#3E3E3E',
        'backgroundContent': '#141414',
        'accentPurple': '#8F00FF',
        'accentTurquoise': '#00FFE0',
        'listBackgroundDark': '#262626',
        'listBackgroundLight': '#373737',
      },

      fontFamily: {
        Quicksand: ['Quicksand'],
      },

      width: {
        widthOfList: '99%',
        contentWidth: '78%',
      },
    },
  },
  plugins: [],
}

