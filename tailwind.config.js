/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(14, 165, 233, 0.2)',
      },
      backgroundImage: {
        'accent-gradient':
          'radial-gradient(1200px 500px at 20% 0%, rgba(56, 189, 248, 0.2), transparent 60%), radial-gradient(1000px 600px at 80% 0%, rgba(45, 212, 191, 0.2), transparent 55%)',
      },
    },
  },
  plugins: [],
};
