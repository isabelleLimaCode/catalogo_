import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Componentes/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#1565c0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="root">
        <Header />
        <div className="header-offset">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;




