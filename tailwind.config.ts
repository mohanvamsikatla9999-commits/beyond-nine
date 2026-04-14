import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        w: "#FFFFFF", off: "#F8F8F6", dk: "#0A0A0B",
        "dk-2": "#111112", "dk-3": "#1C1C1E",
        mid: "#525254", muted: "#9A9A9C", bdr: "#E3E3E0",
        or: "#FF6A00", "or-s": "#FFB347",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] },
      backgroundImage: { "gradient-radial": "radial-gradient(var(--tw-gradient-stops))" },
    },
  },
  plugins: [],
};
export default config;
