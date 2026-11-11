/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08070f',
        'bg-2': '#0d0b1a',
        'bg-card': 'rgba(18, 14, 34, 0.65)',
        violet: '#8b5cf6',
        blue: '#4d7cff',
        lilac: '#b8a2ff',
        muted: '#b7b3d4',
        accent: '#00f0ff',
      },
      fontFamily: {
        disp: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.25)',
        'glow-blue': '0 0 25px rgba(77, 124, 255, 0.25)',
        'glow-lilac': '0 0 30px rgba(184, 162, 255, 0.3)',
      },
      animation: {
        'border-pulse': 'borderGlowPulse 6s infinite alternate ease-in-out',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        borderGlowPulse: {
          '0%': { borderColor: 'rgba(139, 92, 246, 0.2)', boxShadow: 'inset 0 0 15px rgba(139, 92, 246, 0.2)' },
          '50%': { borderColor: 'rgba(77, 124, 255, 0.3)', boxShadow: 'inset 0 0 25px rgba(77, 124, 255, 0.3)' },
          '100%': { borderColor: 'rgba(184, 162, 255, 0.2)', boxShadow: 'inset 0 0 15px rgba(184, 162, 255, 0.2)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

