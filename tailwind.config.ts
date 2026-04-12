import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        surface: "#0e0f1a",
        "surface-2": "#13141f",
        accent: "#6366f1",
        "accent-2": "#818cf8",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] },
      backgroundImage: { "gradient-radial": "radial-gradient(var(--tw-gradient-stops))" },
    },
  },
  plugins: [],
};
export default config;
