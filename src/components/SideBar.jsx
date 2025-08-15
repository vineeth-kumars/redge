import React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "./AutoCompleteSearch";
import { Radio, Typography, useMediaQuery } from "@mui/material";
import Switch from "@mui/material/Switch";
import {
  setSortByName,
  setSortByPrice,
  setSortByPriceValue,
} from "../state/index";


const NAVBAR_HEIGHT = 70;

const Sidebar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();

const sortByName = useSelector((state) => state.product.sortByName);
const sortByPrice = useSelector((state) => state.product.sortByPrice);

const handleSortByName = () => {
  dispatch(setSortByName());
};

const handleSortByPrice = () => {
  dispatch(setSortByPrice());
};


  return (
    <Box
      sx={{
        width: isNonMobileScreens ? "240px" : "100px",
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        backgroundColor: "#ffffff",
        position: "fixed",
        top: `${NAVBAR_HEIGHT + 10}px`,
        left: 0,
        overflowY: "auto",
        padding: 2,
        borderRight: "1px solid #e0e0e0",
        boxShadow: "2px 0px 4px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <AutoCompleteSearch />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="primary" style={{ fontSize: "12px" }}>
            Sort By Name :
          </Typography>
          <Switch {...label} checked={sortByName} onClick={handleSortByName} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="primary" style={{ fontSize: "12px" }}>
            Sort By Price :
          </Typography>
          <Switch
            {...label}
            checked={sortByPrice}
            onClick={handleSortByPrice}
          />
        </div>
      </div>
    </Box>
  );
};
export default Sidebar;
