module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        gcwidth: '1440px'
      },
      maxWidth: {
        'box': '1320px',
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
        superlightGray: '#EAEAEA',
        lightGray: '#C4C4C4',
        darkGray: '#4E4F50', 
      },
    },
  },
  plugins: [],
}
