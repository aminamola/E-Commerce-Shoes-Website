/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    './public/**/*.{html,js}'
],

  theme: {
    fontSize: {
      xxs: '6px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.2rem',
      '2xl': '1.423rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.5rem',
      '50': '50%',
    },
    extend: {
      backgroundImage:{
        'hero-pattern': "url('images/Promotion Image.png')",
        'product01':"url('images/imageProduct01.png')",
        'product02':"url('images/imageProduct02.png')",
        'product03':"url('images/imageProduct03.png')"
      }
    },
  },
  plugins: [],
}
