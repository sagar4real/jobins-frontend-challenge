/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        heading1: ["22px", "24px"],
        heading2: ["15px", "22px"],
        paragraph1:["11px", "14px"],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "400",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Custom breakpoints for mobile responsiveness
        mobile: "480px",
        phablet: "600px",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
}

