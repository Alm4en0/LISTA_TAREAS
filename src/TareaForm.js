import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      setError("La tarea no puede estar vacía");
      setOpen(true);
      return;
    }
    if (texto.length > 100) {
      setError("La tarea no puede tener más de 100 caracteres");
      setOpen(true);
      return;
    }
    agregarTarea(texto);
    setTexto("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Añadir tarea..."
          variant="outlined"
          fullWidth
          margin="normal"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ flex: 1, marginRight: '1rem' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Agregar Tarea
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}

export default TareaForm;
