/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('https://oryx.maxocart.com/assets/dream2earn/image_01.png')",
      },
      colors: {
        primary: "rgb(99 102 241)"
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        'homeLayout': '17rem 1fr',
        'homeLayout2': '25vw 1fr',
        'headingLayout': "1fr min-content"
      },
      maxWidth:{
        // carouselContainer: "calc(100vw - 23.5rem)",
        carouselContainer: "calc(100vw - 17rem)",
        carouselContainer2: "calc(100vw - 25vw - 5rem)",
      },
      screens: {
        navBreak: '1020px'
      }
    },
  },
  plugins: [],
};
