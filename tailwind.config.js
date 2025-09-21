/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          950: '#344034',  // Forest green
          900: '#400101',  // Dark red
          800: '#730202',  // Rich red
          700: '#8B1D1D',  // Complementary red
          600: '#A93E3E',  // Lighter red
          100: '#FFF1F1',  // Light red background
        },
        forest: {
          950: '#344034',  // Deep forest green
          900: '#3D4B3D',  // Darker forest
          800: '#4A5B4A',  // Medium forest
          700: '#5C705C',  // Lighter forest
          100: '#F0F4F0',  // Light forest background
        },
        stone: {
          950: '#736666',  // Deep stone
          900: '#857777',  // Dark stone
          800: '#998888',  // Medium stone
          700: '#AD9B9B',  // Light stone
          100: '#F7F5F5',  // Light stone background
        },
        accent: {
          pink: {
            600: '#FF6B98',  // Complementary pink
            500: '#FF89AC',  // Medium pink
            400: '#FFA7C0',  // Light pink
            100: '#FFF0F4',  // Very light pink
          }
        }
      }
    },
  },
  plugins: [],
}

