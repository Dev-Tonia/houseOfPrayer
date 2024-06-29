import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

import Inventory from "./pages/Inventory";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* <Inventory /> */}
    </>
  );
}
