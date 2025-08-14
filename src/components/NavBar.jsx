import React, { useEffect } from "react";
import FlexBox from "./FlexBox";
import {
  Autocomplete,
  Typography,
  useMediaQuery,
  InputBase,
  IconButton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Switch from "@mui/material/Switch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/index";
import { Search } from "@mui/icons-material";

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
  const [isAdmin, setIsAdmin] = React.useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <FlexBox
      padding="1rem 6%"
      backgroundColor="#ffffff"
      boxShadow="0 2px 4px rgba(0,0,0,0.08)"
      borderBottom="1px solid #e0e0e0"
    >
      <FlexBox gap="1.75rem">
        <Typography variant="h6" fontWeight="bold">
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
          {!isAdmin && (
            <>
              <NotificationButton sx={{ fontSize: "25px" }} />
              <IconButtonWithBadge sx={{ fontSize: "25px" }} />
            </>
          )}
          <Switch {...label} onChange={handleChange} />
          <Typography variant="h6" fontWeight="bold">
            {isAdmin ? "Admin" : "User"}
          </Typography>
        </FlexBox>
      ) : (
        <FlexBox gap="2rem"></FlexBox>
      )}
    </FlexBox>
  );
};

export default NavBar;
