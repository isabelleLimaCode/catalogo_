import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo3.png';
import { db } from '../config/Firebaseconfig';
import { collection, getDocs, where } from 'firebase/firestore';
import './../Css/Home.css';

function Home() {
  const [companyId, setCompanyId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (companyId) {
        console.log(`Searching for company with name "${companyId}"...`);
  
        const querySnapshot = await getDocs(collection(db, 'catalogo', where('nome', '==', companyId)));
  
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(`Found company with ID "${doc.id}"`);
            navigate(`/catalogo/${doc.id}`);
          });
        } else {
          console.log(`No company found with name "${companyId}"`);
          setErrorMessage(`A empresa com nome "${companyId}" não foi encontrada. Por favor, verifique o nome e tente novamente.`);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar empresa:', error);
      setErrorMessage('Erro ao buscar empresa. Tente novamente mais tarde.');
    }
  };
  

  return (
    <div className="container">
      <img src={logo} alt="Stock Easy Logo" className="logo-style" />
      <Typography variant="h4" className="title">Catálogo</Typography>
      <div className="containerInput">
        <TextField
          variant="outlined"
          placeholder="Digite o nome da empresa"
          value={companyId}
          onChange={(e) => {
            setCompanyId(e.target.value);
            setErrorMessage('');
          }}
          InputProps={{
            style: {
              backgroundColor: 'white',
              borderRadius: '10px 0 0 10px',
              color: 'black',
            },
          }}
        />
        <Button className="StyledButton" onClick={handleSearch} style={{ backgroundColor: '#fff', height: 60 }}>
          <SearchIcon style={{ color: 'black' }} />
        </Button>
      </div>
      {errorMessage && <Typography color="error" className="errorMessage">{errorMessage}</Typography>}
    </div>
  );
}

export default Home;
