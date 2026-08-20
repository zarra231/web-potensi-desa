export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#2D5016', dark: '#1A3A0A', light: '#4A7C23' },
        cream: '#F9F6F0',
        terra: '#C4622A',
        charcoal: '#1F1F1F',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
