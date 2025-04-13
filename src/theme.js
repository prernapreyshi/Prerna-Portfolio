// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      accent: "#80CBC4",   // Teal
      light: "#B4EBE6",    // Soft aqua
      beige: "#FBF8EF",    // Cream background
      dark: "#000000",     // Black for text
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

export default theme;
