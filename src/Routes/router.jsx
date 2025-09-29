import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Agent from "../pages/Agent";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/agent",
    element: <Agent />,
  },
]);
