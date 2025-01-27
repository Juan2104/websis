import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        ¡Hola! Soy [Tu Nombre]
      </Typography>
      <Typography variant="h5" gutterBottom>
        Desarrollador Fullstack especializado en React y Node.js
      </Typography>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Conoce mis proyectos
      </Button>
    </Box>
  );
};

export default HeroSection;