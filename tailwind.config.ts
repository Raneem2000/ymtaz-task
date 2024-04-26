import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      backGround: "#F9F9F9",
      primary: "#DDB762",
      white: "#FFFFFF",
      green: "#3FD06F",
      text_blue: "#2C4768",
      black: "#252525",
      gray: "#DADADA",
      black2: "#292019",
      gray2: "#A3A4A5",
    },
    extend: {
      fontFamily: {
        almarai: ['"Almarai"', "sans-serif"],
      },
      fontSize: {
        "title-md": ["24px", "30px"],
      },
      backgroundImage: {
        "my-gradient":
          "linear-gradient(136.97deg, #DDB762 3.34%, #000000 225.23%)",
      },
    },
  },
  plugins: [],
};
export default config;
