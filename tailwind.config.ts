import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        e_sky: "#C3EBFA",
        e_skyLight: "#EDF9FD",
        e_purple: "#CFCEFF",
        e_purpleLight: "#F1F0FF",
        e_yellow: "#FAE27C",
        e_yellowLight: "#FAFCEB",
      },
    },
  },
  plugins: [],
};
export default config;
