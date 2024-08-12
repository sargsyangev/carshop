import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ['selector'],
  theme: {
    extend: {
      zIndex: {
        "1000": "1000",
      },
      colors: {
        bgBaseColor: "rgb(var(--color-bgBaseColor) / <alpha-value>)",
        txtBaseColor: "rgb(var(--color-txtBaseColor) / <alpha-value>)",
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
