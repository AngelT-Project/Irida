/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbf8f3',
          100: '#f5efe4',
          200: '#ebdfcb',
          300: '#dcc9a8',
          400: '#c9ae82',
        },
        gold: {
          300: '#e2c98f',
          400: '#d2b06a',
          500: '#b8924a',
          600: '#9a7535',
        },
        ink: {
          700: '#3d3a35',
          800: '#2a2723',
          900: '#1a1815',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 8px 30px -12px rgba(26, 24, 21, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.2s ease-out both',
      },
    },
  },
  plugins: [],
};
