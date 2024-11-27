/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gin: ['Gin', 'sans-serif'],
      },
      colors: {
          primary: {
            burgundy: '#6B1F38',
            parchment: '#F0EAD6',
            forest: '#2C5F2D'
          },
          accent: {
            gold: '#D4AF37',
            blue: '#1A4B84',
            orange: '#B7410E'
          },
          neutral: {
            charcoal: '#36454F',
            gray: '#8C8C8C',
            offWhite: '#F5F5F5'
          }
      },
    },
  },
  plugins: [],
}

