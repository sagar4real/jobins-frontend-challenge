/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aleo", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        display: ["32px", "32px"],
        heading1: ["22px", "24px"],
        heading2: ["15px", "22px"],
        heading3: ["18px", "26px"],
        heading4:["14px", "20px"],
        paragraph1:["11px", "14px"],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
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

