import { Navigate, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Expenses from "./pages/Expenses";

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
      {
        path: "/expenses",
        element: <Expenses />,
      },
    ],
  },
]);
