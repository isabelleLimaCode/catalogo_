import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; 
import logo from '../assets/logo3.png'; 

function Home() {
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (companyName) {
      navigate(`/catalogo/${companyName}`);
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
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          InputProps={{
            style: {
              backgroundColor: 'white',
              borderRadius: '10px 0 0 10px',
              color: 'black',
            },
          }}
        />
        <Button className="StyledButton" onClick={handleSearch} style={{ backgroundColor: '#fff' ,height:60}}>
          <SearchIcon style={{ color: 'black' }} /> 
        </Button>
      </div>
    </div>
  );
}

export default Home;









