import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card style={{ backgroundColor: '#ffffff', height: '100%' }}>
    <CardMedia
      component="img"
      height="200"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography variant="h6">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        €{product.price.toFixed(2)}
      </Typography>
    </CardContent>
  </Card>
  );
}

export default ProductCard;
