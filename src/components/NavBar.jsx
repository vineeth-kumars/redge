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
import { Search } from "@mui/icons-material";
import Notifications from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Switch from "@mui/material/Switch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/index"; 




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
  const [isAdmin, setIsAdmin] = React.useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handleChange = (event) => {
    setIsAdmin(event.target.checked); // ✅ Now the function closes properly
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log("Fetched products:", data);
      if(data && data.products) {
        dispatch(setProducts(data.products));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <FlexBox padding="1rem 6%">
      <FlexBox gap="1.75rem">
        <Typography variant="h6" fontWeight="bold">
          MyStore
        </Typography>
        {isNonMobileScreens && (
          <FlexBox borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
            <Autocomplete
              disablePortal
              sx={{ width: 300 }}
              options={["Product 1", "Product 2", "Product 3"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search products"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 6, // ✅ Target the input's root
                      height: "30px",
                    },
                  }}
                />
              )}
            />
          </FlexBox>
        )}
      </FlexBox>

      {isNonMobileScreens ? (
        <FlexBox gap="2rem">
          {!isAdmin && (
            <>
              {/* <Notifications sx={{ fontSize: "25px" }} /> */}
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
