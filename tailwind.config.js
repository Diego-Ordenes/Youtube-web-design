/** @type {import('tailwindcss').Config} */
/* En el content, simplemente le estamos diciendo que dentro de index.html o 
cualquier archivo que este dentro de src o tenga extensiones de js,ts,jsx o tsx.
Va a poder utilizar TailWindCss */

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        'color-white': 'var(--light-theme-background-color)',
        'color-gray': 'var(--light-theme-divider-color)',
        'color-gray_2': 'var(--light-theme-secondary-color)',
        'color-gray_3': 'var(--light-primary-color)',
        'color-red': 'var(--dark-accent-color)',
        'color-black-base': 'var(--light-theme-base-color)',
        'color-black-text': 'var(--light-theme-text-color)',
        'color-black-base_2': 'var(--dark-theme-background-color)' // Aquí defines tu variable de color
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: true,
  },
}
