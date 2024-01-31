import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// const activeChain = "mumbai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    > */}
    <Toaster />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThirdwebProvider> */}
  </React.StrictMode>
);
