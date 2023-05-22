import twElementsPlugin from 'tw-elements/dist/plugin.cjs';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [twElementsPlugin],
  darkMode: 'class',
};
