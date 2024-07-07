import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Slider, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebaseconfig';

function Sidebar() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const empresasRef = collection(db, 'catalogo');
        const empresasSnapshot = await getDocs(empresasRef);
        const empresasList = empresasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEmpresas(empresasList);
      } catch (error) {
        console.error('Error em encontrar as empresas:', error);
      }
    };

    fetchEmpresas();
  }, []);

  return (
    <Box sx={{ padding: '10px', color: 'white' }}>
      <Typography variant="h6">Empresas</Typography>
      <List>
        {empresas.map(empresa => (
          <ListItem key={empresa.id}>
            <ListItemText primary={empresa.nome} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Price range</Typography>
      <Box sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
        <Slider
          defaultValue={[0, 999999]}
          min={0}
          max={999999}
          valueLabelDisplay="auto"
          sx={{ color: 'white' }}
        />
      </Box>
      <List>
        <ListItem>
          <FormControlLabel
            control={<Checkbox name="brandNew" sx={{ color: 'white' }} />}
            label="Brand new"
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
