/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#FAFBFE',
        'aqua-custom': '#42b4ca',
      },
      backgroundImage: {
        'login-banner': "url('/assets/images/rickAndMortyPortalGun.jpg')",
       }
    },
  },
plugins: [],

}
