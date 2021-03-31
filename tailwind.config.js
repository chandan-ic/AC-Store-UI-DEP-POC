/*module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}*/
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        default: "var(--color-bg-default)",
        inverse: "var(--color-bg-inverse)",

        "theme": "var(--color-bg-theme)",
        "theme-inverse": "var(--color-bg-theme-inverse)"
      },
textDecoration:['active'],
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        default: "var(--color-text-default)",
        "default-soft": "var(--color-text-default-soft)",
        inverse: "var(--color-text-inverse)",
        "inverse-soft": "var(--color-text-inverse-soft)",
        "theme": "var(--color-text-theme)",
        "theme-inverse": "var(--color-text-theme-inverse)",
        "theme-text-decoration":"var(--color-text-decoration)"
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
sixth:"var(--color-bg-sixth)",
seventh:"var(--color-bg-seventh)",
        default: "var(--color-bg-default)",
        inverse: "var(--color-bg-inverse)",
        "theme": "var(--color-bg-theme)",
        "theme-inverse": "var(--color-bg-theme-inverse)"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'PTSans' : ['PT Sans', 'sans-serif'],
        'Lato' : ['Lato', 'sans-serif'],
        'LibreFranklin' : ['Libre Franklin', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'] 
           },
      maxHeight: {
        "80vh": "80vh"
      },
      backgroundImage: {
        'dominar-250bg': "url('/images/vehicles/bajaj/dominar-250/vehicleProduct.png')",
        'test-ridebg': "url('/images/test-ride.png')",
        'test-ridepgBg': "url('/images/homeTestRideBg.jpeg')"
      },
      padding: {
        "p-60%": "60%"
      },
 
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],

},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]

}