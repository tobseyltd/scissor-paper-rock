/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scissors-gradient-blue1': 'hsl(214, 97%, 5%)',
        'scissors-gradient-blue2': 'hsl(214, 77%, 11%)',
        'paper-gradient-1': 'hsl(230, 89%, 62%)',
        'paper-gradient-2': 'hsl(230, 89%, 65%)',
        'scissor-gradient-1': 'hsl(39, 89%, 49%)',
        'scissor-gradient-2': 'hsl(40, 84%, 53%',
        'rock-gradient-1': 'hsl(349, 71%, 52%)',
        'rock-gradient-2': 'hsl(349, 70%, 56%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'bg-triangle': "url('../src/assets/bg-triangle.svg')",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '20px'
      }
    },
  },
  plugins: [],
}