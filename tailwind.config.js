/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080808',
        surface: '#111111',
        elevated: '#1A1A1A',
        border: '#222222',
        muted: '#a0a0a0',
        'text-primary': '#F0F0F0',
        acid: '#C8FF00',
        electric: '#00D4FF',
        signal: '#FF4D6D',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '1400px',
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 4px #FF4D6D, 0 0 8px #FF4D6D' },
          '50%': { boxShadow: '0 0 8px #FF4D6D, 0 0 20px #FF4D6D' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
