/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sora: ["Sora"],
        onest: "Onest"
      },
      backgroundColor:{
        primary: "#0f0715"
      },
      backgroundImage:{
        radial: "radial-gradient(circle at 50% 30%,#2a1454 -20%,#0f0715 85%)"
      },
      height: {
        'screen-minus-header': 'calc(100vh - 95px)',
      }
    },
  },
  plugins: [],
}