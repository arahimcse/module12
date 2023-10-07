/** @type {import('tailwindcss').Config} 
 * link@https://flowbite.com/docs/getting-started/vue/ 
 * tailwind css setup for vue project
*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  /**
   * link@ https://tailwindcss.com/docs/plugins
   * Plugin Setup
   */
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ],
}

