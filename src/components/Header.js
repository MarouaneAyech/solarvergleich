import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logoClient from '../assets/images/Akkurad-logo-blau.png'; // Chemin vers le logo du client
import logoDeveloper from '../assets/images/addval-logo.png'; // Chemin vers le logo du développeur
import solarModuleImage from '../assets/images/solarmodule.jpg';
import './Header.css';

function Header() {
  return (
    <Box>
        <Box sx={{ padding: 2, borderBottom: '1px solid #ccc', marginBottom: 3 }}>
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
            <img src={logoClient} alt="Logo Client" style={{ height: 50 }} />
            </Grid>
            <Grid item>
            <img src={logoDeveloper} alt="Logo Développeur" style={{ height: 50 }} />
            </Grid>
        </Grid>
        </Box>
        
        <div
        style={{
            width: '100%',
            height: '200px', // Ajustez la hauteur selon vos besoins
            backgroundImage: `url(${solarModuleImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            marginBottom: '20px',
            backgroundRepeat: 'no-repeat' // Assurez-vous que l'image ne se répète pas
        }}
        >
      <h1
        style={{
          fontStyle: 'italic',
          background: 'linear-gradient(to right, #ffffff, #000000)', // Dégradé de couleur
          WebkitBackgroundClip: 'text', // Appliquer le dégradé au texte
          WebkitTextFillColor: 'transparent', // Rendre le texte transparent pour voir le dégradé
          padding: '10px',
          borderRadius: '8px',
          margin: '0'
        }}
      >
         Compare and Choose the Best Solar Panels for Your Needs
      </h1>
    </div>
    
    </Box>
  );
}

export default Header;
