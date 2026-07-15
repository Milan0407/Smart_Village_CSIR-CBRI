import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#ffffff",
            color: "#0f172a",
            border: "1px solid #e2e8f0",
          },
          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />
  </BrowserRouter>
);