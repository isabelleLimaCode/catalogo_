import React from 'react';
import { Box, Typography } from '@mui/material';
import imagem from '../assets/teste.jpg'

function Empresa() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1976d2',
        padding: '10px',
        marginBottom: '20px',
        color: 'white',
      }}
    >
      <img src={imagem} alt="Company Logo" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} />
      <Typography variant="h4" sx={{ marginTop: '10px' }}>Loja teste</Typography>
    </Box>
  );
}

export default Empresa;
