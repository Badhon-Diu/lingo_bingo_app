import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Startlearning from "../Pages/Startlearning";
import About from "../Components/About";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/start-learning",
        element: <Startlearning></Startlearning>,
        loader: () =>
          fetch("https://badhon-diu.github.io/lessondata/lessondata.json"),
      },
      {
        path: "/tutorials",
        element: <App></App>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
    ],
  },
]);
