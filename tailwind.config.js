/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        //Mes test de theme
        mylight: {
          primary: "#FF0000", //rouge
          secondary: "#003FF5", //bleu
          accent: "#00F555", //vert
          neutral: "#9046FE", //bouton selectionné dans le barnav -> violet claire
          "base-100": "#9046FE", //background body et nav-bar-> violet claire
          "base-200": "#FFFFFF", //couleur pour ma barnav -> blanc
          "base-300": "#232020", // -> noir
        },
      },
      {
        mydark: {
          primary: "#FF0000", //rouge
          secondary: "#003FF5", //bleu
          accent: "#00F555", //vert
          neutral: "#7118E2", //bouton selectionné dans le barnav -> violet fonce
          "base-100": "#7118E2", //background body-> violet fonce
          "base-200": "#232020", //couleur pour ma barnav -> noir
          "base-300": "#FFFFFF", // -> blanc
        },
      },
      "light",
      "dark",
    ],
  },
};
