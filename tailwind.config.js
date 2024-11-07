/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: [
      'Saira Stencil One", sans-serif',
      {
        fontFeatureSettings: '"cv11", "ss01"',
        fontVariationSettings: '"opsz" 32'
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [],
}

