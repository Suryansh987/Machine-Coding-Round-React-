/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'DMSans': ['DM Sans', 'sans-serif']
      },
      boxShadow:{
        'center' : ['0px 0px 10px 4px rgb(0 0 0 / 0.1)']
      }

    },
  },
  plugins: [],
}