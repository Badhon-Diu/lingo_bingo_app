import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./animate.compat.css";
import "./animate.css";
import "./animate.min.css";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import { router } from "./Routes/Route.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider> <Toaster />
    </AuthProvider>
  </StrictMode>
);
