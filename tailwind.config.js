/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0px 2px 5px rgba(0, 0, 0, 0.5)", // Example text shadow with pixel values
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Example text shadow with smaller blur
        lg: "1px 5px 10px white", // Example text shadow with larger blur
      },
    },
  },
  plugins: [require("daisyui"),require("tw-elements/dist/plugin.cjs")],
  
};

