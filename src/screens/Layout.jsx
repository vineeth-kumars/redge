import React from "react"
import Navbar from "../components/NavBar"
import Box from "@mui/material/Box"

const NAVBAR_HEIGHT = 70

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          marginTop: `${NAVBAR_HEIGHT}px`,
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
