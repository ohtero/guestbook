module.exports = {  
  content: ["./views/*/*.ejs",
            "./public/scripts.scripts.js"
          ],

  theme: {    
    extend: {
      backgroundImage: {
        'body': "url('../images/body.jpg')"
      },
    },  
  },  
  plugins: [
    require('@tailwindcss/forms')
  ]
  }