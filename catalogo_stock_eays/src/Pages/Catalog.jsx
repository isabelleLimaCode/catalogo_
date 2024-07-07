// Catalogo.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Componentes/Sidebar';
import ProductList from '../Componentes/ProductList';
import Empresa from '../Componentes/Empresa';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import { db } from '../config/Firebaseconfig';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const errorImageUrl = 'https://firebasestorage.googleapis.com/v0/b/stock-easy-7eced.appspot.com/o/Reminders-rafiki.png?alt=media&token=4543a24d-8491-4604-8e80-7d5409e709b3'; // Replace with an actual image URL

function Catalogo() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const companyRef = doc(db, 'catalogo', id);
        const companyDoc = await getDoc(companyRef);

        if (companyDoc.exists()) {
          const companyData = companyDoc.data();
          const productIds = companyData.codigo; 

          if (Array.isArray(productIds) && productIds.length > 0) {
            const productsQuery = query(
              collection(db, 'produtos'),
              where('id', 'in', productIds)
            );
            const productsSnap = await getDocs(productsQuery);

            const productsList = productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
          } else {
            setError('Não há produtos disponíveis nesta empresa.');
          }
        } else {
          setError('Empresa não encontrada.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Erro ao buscar produtos.');
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Empresa />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {error ? (
            <Box textAlign="center">
              <Typography variant="h6" color="error" gutterBottom>
                {error}
              </Typography>
              <img src={errorImageUrl} alt="Error" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          ) : (
            <ProductList products={products} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Catalogo;
