/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      colors: {
        primary: {
          50: '#fef2f5',
          100: '#fee5eb',
          200: '#ffcbda',
          300: '#ffb7c5',
          400: '#ff8da8',
          500: '#ff6388',
          600: '#ff3a6b',
          700: '#ef0f4b',
          800: '#c80e41',
          900: '#a51139',
        },
        secondary: {
          50: '#eee7f3',
          100: '#dbd0e7',
          200: '#b7a0d0',
          300: '#9271b9',
          400: '#7145a4',
          500: '#4b0082',
          600: '#40006f',
          700: '#36005c',
          800: '#2b0049',
          900: '#210036',
        },
        accent: {
          50: '#fffbeb',
          100: '#fff4c6',
          200: '#ffea99',
          300: '#ffe066',
          400: '#ffd733',
          500: '#ffd700',
          600: '#e6c200',
          700: '#b39600',
          800: '#806b00',
          900: '#665500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        japanese: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
