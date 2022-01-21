module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'box': '1248px',
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
        secondary: "'Montserrat', sans-serif",
      },
      fontSize: {
        bigHeading: '43px',
      },
      colors: {
        lightGreen: '#DEF348', 
        lightGray: '#C4C4C4', 
      }
    },
  },
  plugins: [],
}
