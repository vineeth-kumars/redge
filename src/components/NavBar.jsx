import React, { useEffect, useState } from "react";
import FlexBox from "./FlexBox";
import {
  Autocomplete,
  Typography,
  useMediaQuery,
  InputBase,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Switch from "@mui/material/Switch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/index";
import { Search } from "@mui/icons-material";
import { setAdmin } from "../state/index";
import { useSelector } from "react-redux";
import BasicModal from "./BasicModal";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const NotificationBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function NotificationButton() {
  return (
    <IconButton>
      <NotificationsIcon fontSize="small" />
      <NotificationBadge badgeContent={5} color="primary" overlap="circular" />
    </IconButton>
  );
}
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function IconButtonWithBadge() {
  return (
    <IconButton>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
  );
}

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = React.useState(false);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const handleChange = (event) => {
    dispatch(setAdmin(event.target.checked));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FlexBox
      padding="1rem 6%"
      backgroundColor="#ffffff"
      boxShadow="0 2px 4px rgba(0,0,0,0.08)"
      borderBottom="1px solid #e0e0e0"
    >
      <FlexBox gap="1.75rem">
        <Typography
          variant="h6"
          fontWeight="bold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          MyStore
        </Typography>
        {isNonMobileScreens && (
          <FlexBox
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
            backgroundColor="#f0f0f0"
          >
            <InputBase placeholder="search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBox>
        )}
      </FlexBox>

      {isNonMobileScreens ? (
        <FlexBox gap="2rem">
          {!isAdmin ? (
            <>
              <NotificationButton sx={{ fontSize: "25px" }} />
              <IconButtonWithBadge sx={{ fontSize: "25px" }} />
            </>
          ) : (
            <>
              <BasicModal open={open} handleClose={handleClose} />
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Product
              </Button>
            </>
          )}
          <Switch {...label} onChange={handleChange} />
          <Typography variant="h6" fontWeight="bold">
            {isAdmin ? "Admin" : "User"}
          </Typography>
        </FlexBox>
      ) : (
        <FlexBox gap="2rem">
          <IconButton
            onClick={() => {
              setIsMobileMenuToggled(prev => !prev);
              console.log("Mobile menu toggled:", isMobileMenuToggled);
            }}
          >
            <Menu />
          </IconButton>
        </FlexBox>
      )}

      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="auto"
          minWidth="200px"
          backgroundColor="#ffffff"
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(prev => !prev)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU ITEMS */}
          <FlexBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <NotificationButton sx={{ fontSize: "25px" }} />
            <IconButtonWithBadge sx={{ fontSize: "25px" }} />
          </FlexBox>
        </Box>
      )}
    </FlexBox>
  );
};

export default NavBar;
