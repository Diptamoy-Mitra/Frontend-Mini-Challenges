/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f0f4fc",
        "neutral-colors-white": "#fff",
        black: "#000",
        darkslategray: "#393939",
        "neutral-colors-500": "#e0e0e9",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e6e6e6",
        },
        "text-secondary": "#6c737f",
        mediumslateblue: "#4461f2",
        whitesmoke: "#f9f9f9",
        silver: "#c7c7cf",
      },
      spacing: {},
      fontFamily: {
        sarabun: "Sarabun",
        "components-helper-text": "Inter",
        kanit: "Kanit",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      xs: "0.75rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
