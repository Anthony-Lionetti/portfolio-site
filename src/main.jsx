import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import "./styles/styles.css";
import "./styles/colors.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="green" grayColor="gray" radius="large">
      <App />
    </Theme>
  </React.StrictMode>
);
