import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function MediaCard({ product }) {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        width: 300,
        height: 350,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={product.thumbnail}
        title={product.title}
      />

      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontSize: "1rem", fontWeight: 600, mb: 1 }}
        >
          {product.title.length > 25
            ? `${product.title.substring(0, 25)}...`
            : product.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: "0.85rem", color: "text.secondary", mb: 1 }}
        >
          {product.description?.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ fontSize: "0.9rem", fontWeight: 500, color: "primary.main" }}
        >
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
