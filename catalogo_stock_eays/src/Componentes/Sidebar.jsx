import React from 'react';
import { List, ListItem, ListItemText, Slider, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';

function Sidebar() {
  return (
    <Box sx={{ padding: '10px', color: 'white' }}>
      <Typography variant="h6">Category</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Mobile accessory" />
        </ListItem>
        {/* Adicione mais opções de filtro como ListItems aqui */}
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

