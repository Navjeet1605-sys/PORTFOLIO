/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0815',
        'bg-card': '#141124',
        'bg-card-light': '#1c1833',
        'surface-white': '#ffffff',
        violet: '#8b5cf6',
        'violet-dark': '#6d28d9',
        blue: '#3b82f6',
        'blue-dark': '#1d4ed8',
        lilac: '#c4b5fd',
        'lilac-light': '#e9d5ff',
        muted: '#94a3b8',
        'muted-dark': '#64748b',
        cyan: '#06b6d4',
      },
      fontFamily: {
        disp: ['Syne', 'Plus Jakarta Sans', 'Sora', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        signature: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px rgba(139, 92, 246, 0.35)',
        'glow-blue': '0 0 35px rgba(59, 130, 246, 0.35)',
        'glow-portal': '0 0 60px rgba(139, 92, 246, 0.45)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
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
