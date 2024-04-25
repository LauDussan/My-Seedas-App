// Especifica los archivos que Tailwind debe analizar para encontrar clases utilizadas y eliminar el CSS no utilizado.
// Aquí se incluyen los archivos de las páginas y componentes de tu proyecto.
export default {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'  
],

  // Configuración opcional para el modo oscuro.
  darkMode: false, // o 'media' o 'class'

  // Permite extender el tema de Tailwind CSS.
  theme: {
    extend: {
      // Aquí puedes agregar nuevas propiedades al tema de Tailwind.
      // Por ejemplo, puedes agregar nuevos colores.
      colors: {
        primary: '#ff0000', // Nuevo color personalizado llamado 'primary'.
      },
    },
  },

  // Permite extender las variantes predeterminadas de Tailwind, como hover, focus, etc.
  variants: {
    extend: {},
  },

  // Te permite incluir complementos de Tailwind CSS adicionales si los necesitas.
  plugins: [],
};
