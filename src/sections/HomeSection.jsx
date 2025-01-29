import { Box, Typography, Button } from "@mui/material";
import fondo from "../assets/creditos/PANTALLA.jpg";
import { Link } from 'react-scroll';

const HomeSection = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Imagen de fondo con overlay para mejor legibilidad */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.6)", // Oscurece la imagen para mejorar el contraste
          zIndex: -1,
        }}
      />

      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        ¡Hola! Somos Soluciones Informáticas Sur
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "300", mb: 3 }}>
        Desarrolladores Fullstack especializados en React y Node.js
      </Typography>

      {/* Botón estilizado con efecto hover */}
      <Button
        component={Link}
        to="portfolio"
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": {
            background: "linear-gradient(90deg, #0072ff, #00c6ff)",
            transform: "scale(1.05)",
          },
        }}
      >
        Conoce más
      </Button>
    </Box>
  );
};

export default HomeSection;
