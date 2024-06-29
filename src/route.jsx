import { Navigate, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inventory /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
