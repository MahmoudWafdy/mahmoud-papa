/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },colors: {
        // Using modern `rgb`
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
  
      },
      screens: {
        'sm-md': '500px', // Define your custom breakpoint
      },
    },
  },
  plugins: [],
}

