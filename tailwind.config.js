/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: {'min': '375px', 'max': '767px'},
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1800px",

      'mobile-landscape': { 'raw': '(min-width: 375px) and (max-width: 667px) and (orientation: landscape)' },
    },
    extend: {
      fontFamily: {
        cocomat: ["Cocomat Pro", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
        pushkin: ["PushkinScriptHigh"],
        forum: ["Forum"],
      },
      colors: {
        
        "sage-green": "#859070", //title
        "olive-drab": "#626936", //text main
        "olive-green": "#57622A" ,  
      },
    },
  },
  variants: {},
  plugins: [],
};
