/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('https://cdn2.unrealengine.com/fall-guys-home-page-hero-background-desktop3-1920x1080-dcbde3385c1e.jpg?resize=1&w=1920')",
      },
      backgroundColor: {
        'grad': 'radial-gradient(circle, rgba(129,70,249,1) 0%, rgba(166,67,250,1) 65%, rgba(66,187,249,1) 100%)',
      }
    },
  },
  plugins: [],
}

