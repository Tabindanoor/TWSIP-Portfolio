/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      height: {
        'screen-60': '66vh', // 50% of the screen height
      },
    },
  },
  plugins: [],
}

