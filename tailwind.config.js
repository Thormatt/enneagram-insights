/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm Editorial palette
        cream: {
          50: '#FEFDFB',
          100: '#FAFAF5',
          200: '#F5F2EB',
          300: '#EBE6DB',
          400: '#E0D9CA',
          500: '#D4CBB8',
        },
        warm: {
          bg: '#FAFAF5',
          card: '#FFFFFF',
          border: '#E8E4DB',
        },
        charcoal: {
          DEFAULT: '#2D2A24',
          dark: '#1F1C17',
          light: '#5C584E',
          muted: '#8A8578',
        },
        terracotta: {
          50: '#FDF5F2',
          100: '#FAE8E1',
          200: '#F4CFC2',
          300: '#E8A992',
          400: '#D68B6E',
          500: '#C4785C',
          600: '#A85F45',
          700: '#8A4A35',
          800: '#6E3A2A',
          900: '#5A3023',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E6EDE8',
          200: '#CDDBD1',
          300: '#A8C3AF',
          400: '#7D9B84',
          500: '#5F7F66',
          600: '#4A6650',
          700: '#3D5342',
          800: '#334537',
          900: '#2B392E',
        },
        gold: {
          50: '#FCF9F0',
          100: '#F8F0D9',
          200: '#F0DFB3',
          300: '#E5C987',
          400: '#D9B25E',
          500: '#C9A962',
          600: '#A88A3D',
          700: '#8A6E32',
          800: '#71592B',
          900: '#5E4A26',
        },
        // Center colors - Warm Editorial palette
        // Gut/Body Center (Types 8, 9, 1) - "Iron Oxide" - earthy, grounded
        gut: {
          50: '#FAF5F4',
          100: '#F5EAE7',
          200: '#E8CFC8',
          300: '#D9AFA4',
          400: '#C4877A',
          500: '#8C3A2B', // Primary - Iron Oxide
          600: '#7A3226',
          700: '#662A20',
          800: '#52221A',
          900: '#3D1913',
          light: '#E28A7D', // For dark mode
        },
        // Heart Center (Types 2, 3, 4) - "Deep Verdigris" - emotional depth
        heart: {
          50: '#F4F7F6',
          100: '#E6EDEB',
          200: '#C5D6D2',
          300: '#9BBAB3',
          400: '#6A9A90',
          500: '#2D5A52', // Primary - Deep Verdigris
          600: '#274E47',
          700: '#21413B',
          800: '#1B352F',
          900: '#152924',
          light: '#8FB3AC', // For dark mode
        },
        // Head Center (Types 5, 6, 7) - "Storm Slate" - clarity, wisdom
        head: {
          50: '#F5F7F9',
          100: '#E8ECF0',
          200: '#CDD5DE',
          300: '#A9B8C7',
          400: '#7C92A8',
          500: '#364C63', // Primary - Storm Slate
          600: '#2F4256',
          700: '#283848',
          800: '#212D3A',
          900: '#19232D',
          light: '#A3B5CC', // For dark mode
        },
        // Alias for existing components using "storm" tokens
        storm: {
          50: '#F5F7F9',
          100: '#E8ECF0',
          200: '#CDD5DE',
          300: '#A9B8C7',
          400: '#7C92A8',
          500: '#364C63',
          600: '#2F4256',
          700: '#283848',
          800: '#212D3A',
          900: '#19232D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Lora', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(45, 42, 36, 0.08)',
        'warm-lg': '0 10px 40px -4px rgba(45, 42, 36, 0.12)',
      },
    },
  },
  plugins: [],
}
