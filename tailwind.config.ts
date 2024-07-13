import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex:{
        "1000": "1000"
      },
    },
  },
  plugins: [],
};
export default config;
