/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        text: "0 0 5px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.7)", // text shadow 추가
      },
    },
  },
  plugins: [],
};
