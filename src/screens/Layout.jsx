import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

const NAVBAR_HEIGHT = 70;

const Layout = ({ children }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

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

      <Box sx={{ 
        display: "flex", 
        marginTop: `${NAVBAR_HEIGHT}px`,
        gap: "10px",
      }}>

        <Box
          sx={{
            width: isNonMobileScreens ? "240px" : "60px", // smaller sidebar on mobile
            flexShrink: 0,
            position: "fixed",
            top: `${NAVBAR_HEIGHT}px`,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            overflowY: "auto",
            borderRight: "1px solid #ddd",
            transition: "width 0.3s ease",
          }}
        >
          <Sidebar />
        </Box>

  
        <Box
          sx={{
            flexGrow: 1,
            padding: 3,
            maxWidth: "100%", 
            marginLeft: isNonMobileScreens ? "240px" : "100px", // adjust margin based on sidebar width
            transition: "margin-left 0.3s ease",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
