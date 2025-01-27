import { Box, Typography, TextField, Button } from "@mui/material";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        backgroundColor: "#515a5a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Contáctame
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          gap: 2,
          maxWidth: 400,
          width: "100%",
          padding: "2rem",
        }}
      >
        <TextField
          sx={{ color: "#fff" }}
          label="Nombre"
          variant="outlined"
          fullWidth
        />
        <TextField
          sx={{ color: "#fff" }}
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          sx={{ color: "#fff" }}
          label="Mensaje"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
