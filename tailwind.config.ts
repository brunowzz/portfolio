import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["var(--font-kalam)"],
        heebo: ["var(--font-heebo)"],
      },
      colors: {
        "custom-primary": "#fff",
        "custom-secondary": "#F5F6F6",
        "custom-terciary": "#7DFFAF",
        "b-primary": "#171023",
        "b-secondary": "#2C243B",
        "b-terciary": "#322844",
        "b-quaternary": "#8A42DB",
      },
      minHeight: {
        "39": "39rem",
      },
    },
  },
  plugins: [],
};
export default config;
