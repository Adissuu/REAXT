import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", ".src/pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        textCol: { value: '#e8e8e8' },
        yinblue: { value: '#464D77' },
        teal: { value: '#36827F' },
        poppy: { value: '#DF2935' },
        eggshell: { value: '#E4E3D3' }
      },
      fonts: {
        body: { value: "Helvetica, sans-serif" },
      }
    },
    extend: {}
  },

  // The output directory for your css system
  outdir: "styled-system",


})