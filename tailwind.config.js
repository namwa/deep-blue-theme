module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    fontFamily: {
      'headingFont': ['Poppins', 'sans-serif'],
      'textFont': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': {
          50: '#F0F2FE',
          100: '#C8D0FC',
          500: '#0923B9',
          700: '#071E9D',
          900: '#051367',
        },
        'secondary': {
          300: '#97B4F8',
          500: '#5D8BF4',
        },
        'accent': {
          200: '#F589A2',
          300: '#ef476f',
          400: '#ED345F'

        }
      },
      animation: {
        moveUpDown: 'moveUpDown 7s infinite',
        blob: 'blob 15s infinite'
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          "100%": { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
