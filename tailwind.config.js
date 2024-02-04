/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // custom colors

      colors: {
        transparent: "transparent",

        // disable veriants

        disable: "#D0D0D0",

        // white veriants

        white: "#fff",
        "white-100": "#F5F5F5",
        "white-200": "#E8E8E8",
        "white-300": "#D1D1D1",
        "white-rgb": "rgba(255, 255, 255, 0.10)",
        "white-rgb-02": "rgba(255, 255, 255, 0.2)",
        "main-white": "#F0FDF5",

        // dark veriants

        dark: "#2E2E2E",
        "dark-200": "#0A142F",

        // black veriants
        "black-500": "#667085",
        black: "#000",
        "black-600": "#808080",
        "black-700": "#474747",
        "black-800": "#1A1C21",
        "black-900": "#212121",
        "black-100": "#333333",

        // yellow veriants

        yellow: "#F2C963",
        "secondary-50": "#FEF9EC",
        "secondary-100": "#FBEECA",
        "secondary-400": "#EEAF31",
        "secondary-600": "#E68F1A",
        "main-yellow": "#FEB643",
        "yellow-92": "#F3C84D",
        "yellow-status": "#FF9F43",

        // green veriants

        "green-main": "#1EC96B",
        "green-grad": "#1BB287",
        "green-200": "#D3EFDF",
        "green-400": "#46E28C",
        "green-600": "#1EC96B ",
        "green-dark": "#009543",
        "green-rgb": "rgba(30, 201, 107, 0.10)",
        "green-msg": "#23C385",
        "green-yellow": "#FF647C",
        "green-success": "#2CC672",
        "green-dark": "#FE9E41 ",
        "green-low": "#F8CE67",

        // blue veriants

        "blue-200": "#C5DCFF",

        // grey veriants

        "grey-100": "#9E9E9E",
        "grey-200": "#4F4F4F",
        "grey-300": "#828282",
        "grey-400": "#BDBDBD",
        "grey-500": "#EDEDED",
        "gray-60": "#6B6B6B",
        "grey-30": "#D6D6D6",

        //error

        "error-200": "#FF6B6B",
        "error-02": "#FD5D5D",
        "neutral-gray": "#E0E2E7",
        "gray-25": "#F9F9FC",
        "gray-timestamp": "#858D9D",

        //slate veriants

        "slate-500": "#7A7E92",
        "slate-200": "#F4F7FC",

        // neutral veriants

        "neutral-200": "#23262F",
        "neutral-20": "#eee",
        "neutral-300": "#E0E0E0",
        "neutral-400": "#777E90",
        "neutral-black": "#181A20",
        "neutral-dark": "#242C36",

        //main vairiants
        "main-100": "#DBFDEA",
        //table buttons/status
        "lowgray-white-alpha": "#1ec96b33",
        "lowgray-yellow-alpha": "#ff9f4333",
        "lowgray-main-alpha": "#80787833",
        "lowgray-alpha-white": "#fd5d5d33",

        //blue variants
        "low-blue": "#D282F0",
        "high-blue": "#4C8DF1 ",
      },

      backgroundImage: {
        mainGradient: " linear-gradient(90deg, #1BB287 -1.39%, #1EC96B 99.86%)",
        gradientGreen: "linear-gradient(1deg, #1BB287 64.78%, #1EC96B 99.6%)",
        gradientYellow: "linear-gradient(90deg, #FF647C 4.76%, #F3C84D 92.38%)",
        bannerBg: "linear-gradient(262deg, #D282F0 11.3%, #4C8DF1 100.06%)",
        authBg: "url('../images/authentication/authbg.png')",
        vacationBg: "linear-gradient(269deg, #F6DD91 4.52%, #F2C963 97.75%)",
      },

      // custom box shadows

      boxShadow: {
        pricingCard: '0px 4px 10px 0px rgba(0, 0, 0, 0.16)',
        darkBtn: ' 0px 4px 8px 0px rgba(158, 158, 158, 0.16)',
        nav: '0px 8px 24px 0px rgba(0, 0, 0, 0.08)',
        btn: '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
        messageBox: '0px 1.5px 2px 0px rgba(16, 24, 40, 0.10)',
        btnShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.16)',
        btnGreenShadow: '0px 4px 8px 0px rgba(30, 201, 107, 0.16)',
        barShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.16) inset',
        shadowSelect: '0px 2px 2px 0px rgba(0, 0, 0, 0.10)',
        input: '0px 1px 4px 0px rgba(0, 0, 0, 0.06)',
        progressBarShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.15)',
        analyticsBoxShadow: '0px 4px 34px 0px rgba(0, 0, 0, 0.08)'
      },

      // font family

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
       
      },

      // font family
    },
  },

  plugins: [
    require("daisyui"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
  ],
};
