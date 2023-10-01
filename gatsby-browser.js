import "@fontsource/readex-pro/400.css"; // Normal
import "@fontsource/readex-pro/700.css"; // Bold
import "@fontsource/kaisei-decol/400.css"; // Normal
import "@fontsource/kaisei-decol/700.css"; // Bold
import "@fontsource/roboto-mono/400.css"; // Normal
import "@fontsource/roboto-mono/700.css"; // Bold

// gatsby-browser.js
import React from "react";
import { CookiesProvider } from "react-cookie";

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>{element}</CookiesProvider>
);
