/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: '#030a06',
        accent1: '#00ff7f',
        accent2: '#00bfae',
        accent3: '#7c3aed',
      },
      backgroundImage: {
        'aurora': 'linear-gradient(135deg, #00ff7f 0%, #00bfae 50%, #7c3aed 100%)',
      },
      animation: {
        'drift': 'drift 20s infinite alternate ease-in-out',
        'blink': 'blink 0.8s infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
        'bounce-slow': 'bounce-slow 2s infinite',
      },
      keyframes: {
        drift: {
          'from': { transform: 'translate(0,0) scale(1)' },
          'to': { transform: 'translate(40px,30px) scale(1.1)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 6px #22c55e' },
          '50%': { boxShadow: '0 0 16px #22c55e, 0 0 30px rgba(34,197,94,0.3)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
