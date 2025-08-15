import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { useMediaQuery } from "@mui/material";




const ReviewCard = ({ review }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    
    <div
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: isNonMobileScreens ? "10px" : "8px",
        margin: "10px 0",
        width: "100%",
        display: "flex",
         flexDirection: isNonMobileScreens ? "row" : "column",
        alignItems: isNonMobileScreens ? "center" : "flex-start",
        gap: isNonMobileScreens ? "10px" : "4px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
       <h2 style={{ fontSize: isNonMobileScreens ? "1.2rem" : "1rem" }}>
          {review.reviewerName}
        </h2>
        <p style={{ fontSize: isNonMobileScreens ? "1rem" : "0.85rem" }}>
          {review.comment}
        </p>
      </div>

      <Rating
        name="simple-controlled"
        value={review.rating}
        readOnly
        precision={0.5}
        size={isNonMobileScreens ? "medium" : "small"}
      />
    </div>
  );
};
const ProductPage = () => {
   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { productId } = useParams();
  console.log("Product ID from URL:", productId);
  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(productId))
  );

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log("Product in ProductPage:", product);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isNonMobileScreens ? "20px" : "10px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
         padding: isNonMobileScreens ? "20px" : "10px",
         display: "flex",
          flexDirection: isNonMobileScreens ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          width={isNonMobileScreens ? "400px" : "100%"}
          height={isNonMobileScreens ? "400px" : "auto"}
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "400px", height: "400px" }}
        />
         <div style={{ marginLeft: isNonMobileScreens ? "20px" : "0" }}>
          <h1 style={{ fontSize: isNonMobileScreens ? "2rem" : "1.5rem" }}>
            {product.title}
          </h1>
          <p style={{ fontSize: isNonMobileScreens ? "1rem" : "0.9rem" }}>
            {product.description}
          </p>
          <p style={{ fontSize: isNonMobileScreens ? "1rem" : "0.9rem" }}>
            <strong>Price:</strong> ${product.price}
          </p>
          <p style={{ fontSize: isNonMobileScreens ? "1rem" : "0.9rem" }}>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
       <h1 style={{ fontSize: isNonMobileScreens ? "1.8rem" : "1.4rem" }}>Reviews</h1>
      {product.reviews && product.reviews.length === 0 ? (
        <p style={{ fontSize: isNonMobileScreens ? "1rem" : "0.9rem" }}>
          No reviews available for this product.
        </p>
      ) : (
        product.reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))
      )}
    </div>
  );
};

export default ProductPage;
