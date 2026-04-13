import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        off: "#F7F7F5",
        dark: "#0B0B0C",
        "dark-2": "#1A1A1A",
        mid: "#6B6B6B",
        border: "#E8E8E6",
        orange: "#FF6A00",
        "orange-2": "#FFB347",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
