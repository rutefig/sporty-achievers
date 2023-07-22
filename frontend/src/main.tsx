import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { LandingPage } from "./LandingPage.js";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "white",
        color: "black",
        font: "open-sans",
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
