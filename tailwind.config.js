export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 24px 80px rgba(56, 189, 248, 0.12)",
        soft: "0 14px 40px rgba(125, 211, 252, 0.14)",
      },
    },
  },
  plugins: [],
};
