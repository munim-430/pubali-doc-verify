import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0b6b3a",
          dark: "#095a30",
        },
        page: "#eef5f1",
        line: "#dee2e6",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          '"Noto Sans"',
          '"Noto Sans Bengali"',
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.08)",
        header: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
      },
      maxWidth: {
        bs: "1140px",
      },
    },
  },
  plugins: [],
};

export default config;
