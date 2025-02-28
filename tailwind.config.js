/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at left, rgba(122, 34, 173, 0.4), rgba(0, 0, 0, 0.9))",
      },
    },
  },
  plugins: [],
};
