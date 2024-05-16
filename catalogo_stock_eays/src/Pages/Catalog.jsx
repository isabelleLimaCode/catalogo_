import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Componentes/Sidebar';
import ProductList from '../Componentes/ProductList';
import Empresa from '../Componentes/Empresa';
import imagem from '../assets/teste_produto.jpg'
import { Container, Grid, Button, Box } from '@mui/material';

const companies = {
  'empresa1': [
    { id: 1, name: 'Produto 1', price: 9.99, image: imagem},
    { id: 2, name: 'Produto 2', price: 7.99, image: imagem},

  ],
  'empresa2': [
    { id: 3, name: 'Produto 3', price: 19.99, image: imagem },
    { id: 4, name: 'Produto 4', price: 14.99, image: imagem },

  ],
};

function Catalogo() {
  const { id } = useParams();
  const products = companies[id] || [];
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Empresa />
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Sair
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Catalogo;


