/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { raw: '(max-width: 576px)' },
      },
      backgroundColor: {
        primary: '#FFCC33',
        primary1: '#000000',
        primary2: '#ffffff',
        primary3: '#E68EAF',
        primary4: '#F076CB',
        primary5: '#F5F6F6',
      },
      textColor: {
        primary: '#FFCC33',
        primary1: '#000000',
        primary2: '#ffffff',
        primary3: '#E68EAF',
        primary4: '#F076CB',
        primary5: '#F5F6F6',
      },
      borderColor: {
        primary: '#FFCC33',
        primary1: '#000000',
        primary2: '#ffffff',
        primary3: '#E68EAF',
        primary4: '#F076CB',
        primary5: '#F5F6F6',
      },
      fontFamily: {
        monumentExtended: ['Monument Extended'],
        monumentExtendedBold: ['Monument Extended Bold'],
        nostraSet: ['Nostra v1.0 Sett Trial'],
        nostraStream: ['Nostra v1.0 Stream Trial']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
