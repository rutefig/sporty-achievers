import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { LandingPage } from "./LandingPage.js";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "white",
        color: "black",
        fonts: `'Open Sans', sans-serif`,
      },
      fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
