import React from 'react';
import { Button, ButtonGroup, Stack } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <Stack direction="row" spacing={0} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => filtrarTareas("Todas")}
      >
        Todas
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => filtrarTareas("Pendientes")}
      >
        Pendientes
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => filtrarTareas("Completadas")}
      >
        Completadas
      </Button>
    </Stack>
  );
}

export default Filtros;
