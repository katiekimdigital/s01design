import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'swiss-red': '#FF3000',
        'swiss-red-deep': '#B81F00',
        'swiss-muted': '#F2F2F2',
      },
      fontFamily: {
        sans:        ['var(--font-sans)', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono:        ['var(--font-mono)', 'IBM Plex Mono', 'Courier New', 'monospace'],
        handwriting: ['var(--font-handwriting)', 'Caveat', 'cursive'],
      },
      maxWidth: { site: '1280px' },
      borderRadius: {
        DEFAULT: '0', none: '0', sm: '0', md: '0',
        lg: '0', xl: '0', '2xl': '0', full: '9999px',
      },
      animation: {
        's01-pulse': 's01-pulse 1.8s ease-in-out infinite',
        's01-fade-up': 's01-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        's01-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        's01-fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
