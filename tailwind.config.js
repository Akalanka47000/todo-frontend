module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#2462c3',
          hover: '#0059e6',
        },
      },
      width: {},
      minHeight: {},
      scale: {
        101: '1.01',
        102: '1.02',
      },
      boxShadow: {
        ds1: '10px 4px 20px rgba(0, 0, 0, 0.25)',
        ds2: '0px 0px 20px rgba(155, 155, 155, 0.2)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['group-hover'],
      width: ['group-hover'],
      padding: ['group-hover'],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2462c3',

          secondary: '#F000B8',

          accent: '#37CDBE',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
