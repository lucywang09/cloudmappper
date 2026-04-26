/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'cloud-bg':     '#f0fdff',
        'cloud-deep':   '#164e63',
        'cloud-indigo': '#06b6d4',
        'cloud-violet': '#0891b2',
        'cloud-muted':  '#6b7280',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.35s ease-out',
      },
    },
  },
  plugins: [],
}
