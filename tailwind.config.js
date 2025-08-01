import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Start with just light and dark themes
    base: true, // Apply background color and foreground color for root element
    styled: true, // Include daisyUI colors and design decisions for all components
    utils: true, // Adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}