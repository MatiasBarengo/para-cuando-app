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
        primary: '#1B4DB1',
        disabled: '#A7A6A7',
        gray: '#A7A6A7',
        'app-blue': '#1B4DB1',
        'app-yellow': '#F3F243',
        'app-pink': '#FF64BC',
        'app-black': '#000000',
        'app-blackLight': '#1A1E2E',
        'app-grayDark': '#6E6A6C',
        'app-gray': '#A7A6A7',
        'app-red': '#EF3F47',
        'app-white': '#ffffff',
        'app-black': '#000000',
        'dark-gray': '#6E6A6C',
        'light-black': '#1A1E2E',
        'app-grayLight': '#D9D9D9',
        'app-grayLighter': '#F8F7FA',
        'lighter-gray': '#F8F7FA',
      },
      boxShadow: {
        shadow1: '0 2px 4px 0px rgba(0, 0, 0, 0.25)',
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
