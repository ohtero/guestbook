module.exports = {  
  content: ["./views/*/*.ejs",
            "./public/scripts.scripts.js"],

  theme: {    extend: {},  },  
  plugins: [
    require('@tailwindcss/forms')
  ]
  }