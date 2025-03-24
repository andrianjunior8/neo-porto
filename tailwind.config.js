/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        "gradient-slide": "gradient-slide 5s linear infinite", // Example animation
      },
      keyframes: {
        "gradient-slide": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "100% 100%" },
        },
      },
    },
  },
};
