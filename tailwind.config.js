/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1a1a2e',
          dark: '#16213e',
          deeper: '#0f0f1a',
        },
        accent: {
          amber: '#e8a87c',
          blue: '#7c9ee8',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeCard: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.25s ease both',
        fadeCard: 'fadeCard 0.3s ease both',
      },
    },
  },
  plugins: [],
}
