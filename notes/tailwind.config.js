/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'calendar-lg': '3rem', // Large text for the calendar
      },
    },
  },
  plugins: [],
}

