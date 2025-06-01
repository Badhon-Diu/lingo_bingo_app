import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Home from "../Components/Home";
import Myprofile from "../Components/Myprofile";
import Tutorials from "../Components/Tutorials";
import Startlearning from "../Pages/Startlearning";
import PrivateRoute from "./PrivateRoute";
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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Myprofile></Myprofile>
          </PrivateRoute>
        ),
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
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
