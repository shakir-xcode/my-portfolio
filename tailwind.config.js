/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"]
      },
      colors: {
        "primary-color": "var(--text-primary)",
        "secondary-color": "var(--text-secondary)",
        "accent": "var(--accent)",
        "color-bg": "var(--background)",
      },
    },
  },
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // plugins: [
  //   require('tailwind-scrollbar-hide'),
  // ],
}

