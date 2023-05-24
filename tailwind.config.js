/** @type {import('tailwindcss').Config} */

function withOpacity(variableName){
  return({opacityValue}) => {
    if(opacityValue === undefined){
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(hand.cur), pointer',
      }
    },
    colors: {
      primary2: withOpacity('--color-primary'),
      card: withOpacity('--card'),
      cardBorder: withOpacity('--card-border'),
      secondaryGlow: 'conic-gradient( from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg )',
      primaryGlow: 'radial-gradient( rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) )',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'primary': '#1A0B2E',
      'secondary': '#11071F',
      'metal': '#693B93',
      'Icon': '#251C31',
      'tahiti': '#3ab7bf',
      'fontColor': '#7127BA',
      'color': '#9857D3',
      'success': '#4BB543',
      'error': '#ff0033',
    },
    sepia: {
      filter: 'grayscale(100%) contrast(1) brightness(90%)',
    },
    fontFamily: {
      Preahvihear: ['Preahvihear', 'sans-serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      Varela: ['Varela Round', 'sans-serif'],
      Kanit: ['Kanit', 'sans-serif'],
    },
  },
  plugins: [],
}

