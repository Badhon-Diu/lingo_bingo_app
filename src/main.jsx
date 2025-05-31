import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./animate.compat.css";
import "./animate.css";
import "./animate.min.css";
import "./index.css";
import { router } from "./Routes/Route.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
