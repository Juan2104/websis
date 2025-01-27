import  { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const formRef = useRef(); // Usar referencia para el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_je9zwu9', // Reemplazar con tu Service ID
        'template_2y3pylp', // Reemplazar con tu Template ID
        formRef.current, // Referencia al formulario
        '9ggaBpxKXPOhCszwA' // Reemplazar con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Correo enviado exitosamente');
          setFormData({ name: '', email: '', message: '' }); // Resetear formulario
        },
        (error) => {
          console.log(error.text);
          setStatus('Hubo un error al enviar el correo');
        }
      );
  };

  return (
    <Box
      sx={{
        backgroundColor: '#212f3c',
        color: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contacto
      </Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          margin="normal"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={() => handleSubmit()} fullWidth>
          Enviar
        </Button>
      </form>
      {status && (
        <Typography variant="body2" mt={2}>
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
