import React from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PrivyProvider } from "@privy-io/react-auth";

import "./index.css";
import { StateContextProvider } from "./context";
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrivyProvider
    appId="cm2mzrho700kxcchgnithhgvg"
    config={{
      // Customize Privy's appearance in your app
      appearance: {
        theme: "dark",
      },
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
);
