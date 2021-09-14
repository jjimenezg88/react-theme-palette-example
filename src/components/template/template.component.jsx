import React, { useState } from "react";
import NavBar from "../navbar/navbar.component";
import SideBar from "../sidebar/sidebar.component";

const ClearTemplate = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = (open) => {
    setSidebarOpen(open);
  };
  return (
    <>
      <NavBar toggleMenu={toggleSidebar}></NavBar>
      <SideBar toggleMenu={toggleSidebar} sideBarOpen={sidebarOpen}></SideBar>
      {children}
    </>
  );
};

export default ClearTemplate;
