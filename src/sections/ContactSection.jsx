import { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para el botón de envío

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Deshabilitar botón mientras se envía

    emailjs
      .sendForm(
        "service_je9zwu9", // Reemplazar con tu Service ID
        "template_2y3pylp", // Reemplazar con tu Template ID
        formRef.current,
        "9ggaBpxKXPOhCszwA" // Reemplazar con tu Public Key
      )
      .then(
        () => {
          setStatus({ message: "Correo enviado exitosamente 🎉", type: "success" });
          setFormData({ name: "", email: "", message: "" }); // Resetear formulario
        },
        () => {
          setStatus({ message: "Hubo un error al enviar el correo ❌", type: "error" });
        }
      )
      .finally(() => setIsSubmitting(false)); // Reactivar botón después de procesar
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1c1c1c, #2a3d66)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 3 }}>
        Contáctanos
      </Typography>

      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          gap: 2,
          maxWidth: 400,
          width: "100%",
          padding: "2rem",
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={isSubmitting}
          sx={{
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            transition: "0.3s",
            "&:hover": { background: "linear-gradient(90deg, #5a0eb3 0%, #1e5dcf 100%)" },
            "&:disabled": { background: "#ccc", color: "#666" }, // Deshabilitar color cuando está enviando
          }}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>

        {status.message && (
          <Alert severity={status.type} sx={{ mt: 2, transition: "0.5s" }}>
            {status.message}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default ContactSection;
