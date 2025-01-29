import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import m3dash from "../assets/m3autos/Dashboard.jpg";
import m3informes from "../assets/m3autos/Informes.jpg";
import m3resumen from "../assets/m3autos/Informes.jpg";
import credi1 from "../assets/creditos/Dashboard.jpg";
import credi2 from "../assets/creditos/caja.jpg";
import credi3 from "../assets/creditos/gestion.jpg";
import credi4 from "../assets/creditos/Informes.jpg";
import credi5 from "../assets/creditos/Productividad.jpg";
import wms1 from "../assets/wms/menu.jpg";
import wms2 from "../assets/wms/pedidos.jpg";
import wms3 from "../assets/wms/recepcion.jpg";
import wms4 from "../assets/wms/stock.jpg";

const projects = [
  {
    title: "Concesionaria Autos",
    description:
      "Este proyecto está destinado a la administración de una concesionaria de autos, permitiendo gestionar desde la compra hasta la venta y los gastos diarios.",
    images: [m3dash, m3informes, m3resumen],
  },
  {
    title: "Gestión de Créditos",
    description:
      "Sistema especializado en la gestión de créditos de pago diario, incluyendo administración de cobradores y clientes.",
    images: [credi1, credi2, credi3, credi4, credi5],
  },
  {
    title: "Gestión de Almacenes",
    description:
      "Software logístico para la gestión de inventarios en almacenes, incluyendo ingresos, egresos, traslados y ajustes.",
    images: [wms1, wms2, wms3, wms4],
  },
];

const PortfolioSection = () => {
  return (
    <Box
      id="portfolio"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1c1c1c, #2a3d66)",
        color: "#fff",
        py: 6,
        px: 4,
      }}
    >
      <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Portafolio
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#2c3e50",
                color: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column", // Asegurar alineación vertical
                height: "100%", // Todas las cards tendrán la misma altura
                minHeight: "450px", // Altura mínima uniforme
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              {/* Carrusel de imágenes con ajuste responsivo */}
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ borderRadius: "12px", overflow: "hidden", width: "100%" }}
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt={`Imagen ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "250px",
                        objectFit: "contain", // Evita cortes
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
