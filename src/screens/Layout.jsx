import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import Box from "@mui/material/Box";

const NAVBAR_HEIGHT = 70;

const Layout = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: `${NAVBAR_HEIGHT}px`,
          zIndex: 1200, 
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Navbar />
      </Box>

     
      <Box sx={{ display: "flex", marginTop: `${NAVBAR_HEIGHT}px` }}>
        <Box
          sx={{
            width: "240px",
            flexShrink: 0,
            position: "sticky",
            top: `${NAVBAR_HEIGHT}px`, 
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            overflowY: "auto",
            borderRight: "1px solid #ddd",
          }}
        >
          <Sidebar />
        </Box>

        <Box sx={{ flexGrow: 1, padding: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
