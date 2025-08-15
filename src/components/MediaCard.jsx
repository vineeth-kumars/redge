import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ product }) {
  return (
    <Card 
    sx={{ maxWidth: 345 }} style={{ cursor: "pointer" }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={product.images[0]}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
