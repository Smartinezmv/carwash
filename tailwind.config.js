/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-1': '#1d3457',
        'background-2': '#3c4f7e',
      },
    },
  },
  plugins: [],
}

