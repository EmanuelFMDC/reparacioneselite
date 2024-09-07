/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.js', // Incluye cualquier archivo JS que contenga clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0583a5', // Agregamos el color personalizado bajo el nombre 'primary'
      },
    },
  },
  plugins: [],
}

