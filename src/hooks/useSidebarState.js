// hooks/useSidebarState.js

import { useState } from "react";

export const useSidebarState = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const updateIsOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return { isSidebarOpen, updateIsOpen };
};
