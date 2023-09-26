/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        groove1: "#3a2a3c",
        groove2: "#fef1d9",
        groove3: "#ffd1d1",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        shrikhand: ["var(--font-shrikhand)"],
        space: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};
