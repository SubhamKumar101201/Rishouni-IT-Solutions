/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rishoni: {
          light: '#F3DFA0',
          DEFAULT: '#D9B96E',
          dark: '#B8924A',
          deep: '#8A6A2F'
        },
        "bg-black": "#0D0D0D",
        charcoal: "#171717",
        muted: "#B8B8B8"
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #F3DFA0, #D9B96E, #B8924A)"
      },
      boxShadow: {
        'gold-lg': '0 12px 40px rgba(217,185,110,0.14)'
       }
    }
  },
  plugins: []
};