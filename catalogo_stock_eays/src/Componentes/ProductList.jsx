import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography, Box } from '@mui/material';

const errorImageUrl = 'https://firebasestorage.googleapis.com/v0/b/stock-easy-7eced.appspot.com/o/Reminders-rafiki.png?alt=media&token=4543a24d-8491-4604-8e80-7d5409e709b3'; // URL da imagem de erro

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <img src={errorImageUrl} alt="Stock em atualização" style={{ maxWidth: '60%', height: 'auto' }} />
        <Typography variant="h5" color="error" gutterBottom>
          Stock está em atualização
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
