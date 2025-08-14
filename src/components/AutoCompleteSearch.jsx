import React from "react";
import FlexBox from "./FlexBox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/index";

const AutoCompleteSearch = () => {
  const [catogories, setCategories] = React.useState([]);
  const dispatch = useDispatch();
  let Categories = new Set();
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log("Fetched products:", data);
      if (data && data.products) {
        dispatch(setProducts(data.products));
        data.products.forEach((product) => {
          Categories.add(product.category);
        });
        setCategories(Array.from(Categories));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <FlexBox borderRadius="9px" gap="3rem" backgroundColor="#f0f0f0">
      <Autocomplete
        disablePortal
        sx={{ width: "100%" }}
        options={catogories}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search products"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 6,
                height: "30px",
              },
            }}
          />
        )}
      />
    </FlexBox>
  );
};

export default AutoCompleteSearch;
