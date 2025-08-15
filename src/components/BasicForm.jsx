import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import FlexBox from "./FlexBox";
import { useDispatch } from "react-redux";
import { setAddProduct } from "../state";

export default function BasicForm({ handleClose }) {
    const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const id = Math.floor(Math.random() * 10000); 
    data.id = id;
    dispatch(setAddProduct(data));
    handleClose(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("title", { required: "Title is required" })}
        error={!!errors.title}
        helperText={errors.email?.message}
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("price", { required: "Price is required" })}
        error={!!errors.price}
        helperText={errors.price?.message}
      />
      <TextField
        label="Category"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("category", { required: "Category is required" })}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      
      <TextField
        label="Image URL"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("thumbnail", { required: "Image URL is required" })}
        error={!!errors.thumbnail}
        helperText={errors.thumbnail?.message}
      />
     <FlexBox>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>   
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          Close
        </Button>
      </FlexBox>
     
    </form>
  );
}
