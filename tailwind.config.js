/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        'searchbutton':"rgba(83, 100, 113, 1.00)",
        'bordercolor':"rgb(239, 243, 244)"
      }
    },
    backgroundColor:theme=>({
      ...theme('colors'),
      'search':"rgb(239, 243, 244)",
      'postbutton':"rgb(29, 155, 240)",
    }),
    borderWidth: {
      '1':'1px',
      '2':'2px',
    }
  },
  plugins: [],
}

