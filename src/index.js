import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
