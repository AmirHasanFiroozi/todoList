module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         mainLightColor: '#3e68a3' ,
         mainLightColorOP: '#3e68a350' ,
         mainDarkColor : '#2f4156' ,
         mainDarkColorOp : '#2f415650' ,
         subLightColor : '#D67840' ,
         subLightColorOp : '#D6784090' ,
         textColor : '#f5efeb'
      },
    },
    fontFamily : {
      sans : ["sourGummy" , "sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem', // Optional: Add default padding if needed
      screens: {
        sm: '95%',      // Full width on small screens
        md: '616px',     // Medium screens
        lg: '754px',     // Large screens
        xl: '1000px',    // Extra-large screens
        'moreXl': '1400px', // Custom size for moreXl screens
      },
    },
    screens: {
      'moreXl': { 'min': '1400px' },  // For screens 1400px and up
      'xl': { 'max': '1400px' },       // For screens up to 1400px
      'lg': { 'max': '1024px' },       // For screens up to 1024px
      'md': { 'max': '768px' },        // For screens up to 768px
      'sm': { 'max': '640px' },        // For screens up to 640px
    },
  },
  plugins: [],
}

