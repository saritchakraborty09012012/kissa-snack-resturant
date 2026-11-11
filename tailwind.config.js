/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05060a',
        'ink-2': '#080a10',
        'ink-3': '#0c0f16',
        bone: '#ede9e0',
        'bone-2': '#cfcbc2',
        mist: '#9da6ae',
        ice: '#b9d6e7',
        'ice-2': '#d6e8f2',
        ember: '#c9894b',
        line: 'rgba(237,233,224,0.14)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.28em',
        wide2: '0.18em',
      },
      screens: {
        xs: '480px',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
