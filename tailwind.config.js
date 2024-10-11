/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '14px', // You can add more custom widths
      },
      fontFamily: {
        Poppins : ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'sky-custom': 'rgb(13,194,231)', // Light blue color
        'blue-custom': 'rgb(28,18,203)'  // Darker blue color
      },
      backgroundColor :{
        "primary": "#101630",
      }
    },
  },
  plugins: [],
}

