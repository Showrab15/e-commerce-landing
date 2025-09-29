import { createBrowserRouter } from "react-router-dom";
import MasterAgent from "../components/MasterAgent/MasterAgent";
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
    children: [
      {
        path: "/agent",
        element: <MasterAgent />,
      },
    ],
  },
]);
