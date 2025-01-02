/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.html', // All HTML files in the src folder and subfolders
    './src/**/*.js'],   // All JS files in the src folder and subfolders],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

