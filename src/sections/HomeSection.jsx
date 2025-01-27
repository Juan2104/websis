import { Box, Typography, Button } from '@mui/material';
import fondo from '../assets/creditos/PANTALLA.jpg';

const HomeSection = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#17202a',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
        backgroundPosition: 'center', // Centra la imagen en el contenedor
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        color: '#fff', // Color del texto blanco para mejor legibilidad
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        ¡Hola! Somos Soluciones Informáticas
      </Typography>
      <Typography variant="h5" gutterBottom>
        Desarrollador Fullstack especializado en React y Node.js
      </Typography>
      <Button variant="contained" color="secondary">
        Conoce más
      </Button>
    </Box>
  );
};

export default HomeSection;
