import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const activeChain = "mumbai";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />

    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        autoConnect={true}
        queryClient={queryClient}
        clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
        activeChain={activeChain}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
