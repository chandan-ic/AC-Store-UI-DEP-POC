module.exports = {
  purge:{enabled:false, content:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        default: "var(--color-bg-default)",
        inverse: "var(--color-bg-inverse)",
        "theme": "var(--color-bg-theme)",
        "theme-inverse": "var(--color-bg-theme-inverse)",
        "theme-inverse": "var(--color-bg-theme-inverse)"

      },
      textDecoration: ['active'],
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        default: "var(--color-text-default)",
        "hero-primary":"var(--color-hero-primary)",
        "hero-subtext":"var(--color-hero-subtext)",
        "hero-subtext2":"var(--color-hero-subtext2)",
        "default-soft": "var(--color-text-default-soft)",
        inverse: "var(--color-text-inverse)",
        "inverse-soft": "var(--color-text-inverse-soft)",
        "theme": "var(--color-text-theme)",
        "theme-inverse": "var(--color-text-theme-inverse)",
        "theme-text-decoration": "var(--color-text-decoration)"
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        topbar: "var(--color-bg-topbar)",
        sixth: "var(--color-bg-sixth)",
        seventh: "var(--color-bg-seventh)",
        default: "var(color-bg-default)",
        inverse: "var(--color-bg-inverse)",
        finance: "var(--color-bg-finance)",
        advKhivraj: "var(--color-bg-advKhivraj)",
        bikeColorBG : "var(--color-bg-bike-color)",
        "theme": "var(--color-bg-theme)",
        "theme-inverse": "var(--color-bg-theme-inverse)"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'PTSans': ['PT Sans', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'LibreFranklin': ['Libre Franklin', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },
      minHeight: {
        "400":"400px",
        "90vh":"90vh",
        "80vh":"80vh",
        "70vh":"70vh",
        "50vh":"50vh",
        "40vh":"40vh",


      },
      minWidth: {
        "400": "400px"
      },
      maxHeight: {
        "100vh":"100vh",
        "96vh": "96vh",     
        "95vh": "96vh",     
        "94vh": "94vh",     
        "93vh": "93vh",
        "92vh": "92vh",
        "90vh": "90vh",
        "80vh": "80vh"
      },
      height: { 
        "100vh":"100vh",
        "96vh": "96vh",     
        "95vh": "96vh",     
        "94vh": "94vh",     
        "93vh": "93vh",
        "92vh": "92vh",
        "90vh": "90vh",
        "85vh": "85vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "15vh": "15vh",
        "10vh": "10vh",
        "5vh": "5vh",
      },
      backgroundImage: {
        'dominar-250bg': "url('/images/vehicles/bajaj/dominar-250/vehicleProduct.png')",
        'test-ridebg': "url('/images/dominar400-img-02-big.png')",
        'test-ridepgBg': "url('/images/homeTestRideBg.jpeg')"
      },
      padding: {
        "p-60%": "60%"
      },

    },
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]

}