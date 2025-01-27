import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import m3dash from '../assets/m3autos/Dashboard.jpg';
import m3informes from '../assets/m3autos/Informes.jpg';
import m3listado from '../assets/m3autos/Listado.jpg';
import m3resumen from '../assets/m3autos/Informes.jpg';
import credi1 from '../assets/creditos/Dashboard.jpg';
import credi2 from '../assets/creditos/caja.jpg';
import credi3 from '../assets/creditos/gestion.jpg';
import credi4 from '../assets/creditos/Informes.jpg';
import credi5 from '../assets/creditos/Productividad.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Concesionaria autos',
      description: 'Este proyecto está destinado a la administración de una concesionaria de autos, se registra desde la compra de un auto hasta su gestión y gastos diarios.',
      images: [m3dash, m3informes, m3listado, m3resumen],
    },
    {
      title: 'Gestión de créditos',
      description: 'Este proyecto esta destinado a la gestión de créditos con pago díario, con administración de cobradores y clientes',
      images: [credi1, credi2, credi3, credi4, credi5],
    },
    {
      title: 'Gestión de almacenes',
      description: 'Este proyecto esta destinado al rubro logístico, para la administración de la mercadería dentro de un almacén/depósito, permitiendo transferencias de ingresos, egresos, traslados y ajustes.',
      images: [
        'https://via.placeholder.com/300x200?text=Imagen+1',
        'https://via.placeholder.com/300x200?text=Imagen+2',
        'https://via.placeholder.com/300x200?text=Imagen+3',
        'https://via.placeholder.com/300x200?text=Imagen+4',
      ],
    },
  ];

  return (
    <Box
      id="portfolio"
      sx={{
        height: '100vh',
        backgroundColor: '#212f3c',
        color: '#fff',
        padding: '2rem',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom>
        Portafolio
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#2c3e50', color: '#fff' }}>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ borderRadius: '8px', overflow: 'hidden' }}
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt={`Imagen ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto', // Ajuste dinámico
                        maxHeight: '100%', // Relativo al alto de la ventana
                        objectFit: 'cover', // Ajuste proporcional
                        objectPosition: 'center', /* Centra la imagen en el contenedor */
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
