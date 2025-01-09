/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Update with your HTML file path
    "./src/**/*.{html,js}" // Update with your JS/HTML folder paths
  ],
  theme: {
    extend: {
      colors: {
        brand: "#ff6347" // Example of adding a custom color
      },
      fontSize: {
        xxs: "0.65rem" // Example of adding a custom font size
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms") // Example of using a Tailwind plugin
  ]
};
