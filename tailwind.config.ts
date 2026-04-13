import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0C10",
        "bg-2": "#0f1016",
        "bg-3": "#13141c",
        violet: "#6C5CE7",
        aqua: "#00F5D4",
        gold: "#F9C74F",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] },
      backgroundImage: { "gradient-radial": "radial-gradient(var(--tw-gradient-stops))" },
    },
  },
  plugins: [],
};
export default config;
