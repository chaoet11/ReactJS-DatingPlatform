/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      xl3: '0 0 13.6px 10px rgba(160, 255, 31, 0.58)',
      xl4: '0 0 28px 8px rgba(255, 3, 255, 1)',
    },
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
        rotatebtn: 'rotating 10s infinite linear',
        shake: 'shake 2.5s infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '25%': {
            transform: ' scale(1.5)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
          '75%': {
            transform: ' scale(2)',
          },
        },
        rotating: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(5deg)',
          },
          '75%': {
            transform: 'rotate(-5deg)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['"Noto Sans TC"', 'Helvetica', 'sans-serif', 'Arial'],
      },
      fontSize: {
        h1: '48px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
        p: '9px',
      },
      colors: {
        primary: '#A0FF1F', // 自定义的主要颜色
        secondary: '#ff03ff',
        neongreen: '#A0FF1F',
        neonpink: '#ff03ff',
        light: '#fff',
        dark: '#000',
        transparent: 'transparent',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubblegum: '#ff77e9',
        bermuda: '#78dcca',
        grayBorder: '#1d4357',
        grayBlue: '#7d8491',
      },
      btn: {
        primary: '#A0FF1F',
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['black'],
  },
};
