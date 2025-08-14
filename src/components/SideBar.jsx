import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useLocation } from "react-router-dom";
import FlexBox from "./FlexBox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useDispatch } from "react-redux";  
import { setProducts } from "../state/index";
import AutoCompleteSearch from "./AutoCompleteSearch";

const NAVBAR_HEIGHT = 70;

const Sidebar = () => {
  

  return (
    <Box
      sx={{
        width: 240,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        backgroundColor: "#ffffff",
        position: "fixed",
        top: `${NAVBAR_HEIGHT+10}px`,
        left: 0,
        overflowY: "auto",
        padding: 2,
        borderRight: "1px solid #e0e0e0",
        boxShadow: "2px 0px 4px rgba(0,0,0,0.08)"
      }}
    >
      
     <AutoCompleteSearch />

     {/* need to add sorting by name and price */}
    </Box>
  );
};

export default Sidebar;
