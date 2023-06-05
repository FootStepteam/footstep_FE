/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgba(0, 175, 255, 0.4)',
        'placeholder-color': 'A5A5A5',
        'border-color': 'DCDCDC',
        'white-color': 'ffffff',
        'hover-color': 'rgba(0, 175, 255, 0.6)',
        'skyblue-1': '#00AFFF',
      },
      height: {
        banner: 'calc(100vh - 5.5rem)',
      },
      keyframes: {
        intro: {
          from: { color: '#FFFFFF' },
          to: { color: '000000' },
        },
        introBtn: {
          from: { backgroundColor: '#FBF7F2', color: '#FBF7F2' },
          to: { backgroundColor: 'main-color', color: '#FFFFFF' },
        },
      },
      animation: {
        intro: 'intro 1s ease-in-out',
        introBtn: 'introBtn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
