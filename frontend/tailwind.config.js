/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    // theme presets
    // color key is required, but color names are optional
    // to add new section to the classname, nest the objects
    extend: {
      colors: {
        primary: "#030014",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
        },
        mainGreen : "#328E6E",
        bgGrey : "#EAEAEA",
        textGrey: "#A4A4A4"

      },
    },
  },
  plugins: [],
};
