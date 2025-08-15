import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import MediaCard from "../components/MediaCard";

const HomePage = () => {
  const products = useSelector((state) => state.product.items) || [];

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <MediaCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
