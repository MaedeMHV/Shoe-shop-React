/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  theme: {
    extend: {
    colors:{
      night:{
        DEFAULT:"#0D1120",
        50:"#171E2C",
        100:"#0D1120",

      },
    },
},
  },
  plugins: [],
}

