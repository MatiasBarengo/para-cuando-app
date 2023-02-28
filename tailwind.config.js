/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        'primary': '#1B4DB1',
        'disabled': '#A7A6A7',
        'white': '#ffffff',
        'gray': '#A7A6A7',
        'dark-gray': '#6E6A6C',
        'light-black': '#1A1E2E',
        'lighter-gray': '#F8F7FA'
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
