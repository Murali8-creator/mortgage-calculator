import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { darkTheme } from '../../theme'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
