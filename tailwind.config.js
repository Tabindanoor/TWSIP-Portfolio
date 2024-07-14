/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      height: {
        'screen-60': '60vh', // 80% of the screen height
      },
    },
  },
  plugins: [],
}

