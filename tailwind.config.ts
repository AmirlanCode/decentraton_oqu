import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_gray: "#F5F5F5",
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
    },
  },
  plugins: [],
};
export default config;
