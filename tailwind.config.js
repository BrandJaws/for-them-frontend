/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { raw: '(max-width: 576px)' },
        'xl': '1440px'
      },
      backgroundColor: {
        primary: '#FFCC33 !important',
        primary1: '#000000 !important',
        primary2: '#ffffff !important',
        primary3: '#E68EAF !important',
        primary4: '#F076CB !important',
        primary5: '#F5F6F6 !important',
        primary6: '#708355 !important',
      },
      textColor: {
        primary: '#FFCC33 !important',
        primary1: '#000000 !important',
        primary2: '#ffffff !important',
        primary3: '#E68EAF !important',
        primary4: '#F076CB !important',
        primary5: '#F5F6F6 !important',
        primary6: '#708355 !important',
      },
      borderColor: {
        primary: '#FFCC33 !important',
        primary1: '#000000 !important',
        primary2: '#ffffff !important',
        primary3: '#E68EAF !important',
        primary4: '#F076CB !important',
        primary5: '#F5F6F6 !important',
        primary6: '#708355 !important',
      },
      fontFamily: {
        monumentExtendedLight: ['Monument Extended Light'],
        monumentExtended: ['Monument Extended'],
        monumentExtendedBold: ['Monument Extended Bold'],
        nostraSet: ['Nostra v1.0 Sett Trial'],
        nostraStream: ['Nostra v1.0 Stream Trial']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
