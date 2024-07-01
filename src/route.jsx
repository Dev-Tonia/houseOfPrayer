import { Navigate, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Expenses from "./pages/Expenses";
import ExpensesOverview from "./pages/ExpensesOverview";
import CollectionOverview from "./pages/CollectionOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      ,
      {
        path: "/collection",
        element: <Inventory />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/expense-overview",
        element: <ExpensesOverview />,
      },
      {
        path: "/collection-overview",
        element: <CollectionOverview />,
      },
    ],
  },
]);
