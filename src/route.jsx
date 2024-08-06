import { Navigate, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Expenses from "./pages/Expenses";
import ExpensesOverview from "./pages/ExpensesOverview";
import CollectionOverview from "./pages/CollectionOverview";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./components/common/ProtectedRoute"; // Adjust the path as necessary

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "collection",
            element: <Inventory />,
          },
          {
            path: "expenses",
            element: <Expenses />,
          },
          {
            path: "expense-overview",
            element: <ExpensesOverview />,
          },
          {
            path: "collection-overview",
            element: <CollectionOverview />,
          },
        ],
      },
    ],
  },
]);
