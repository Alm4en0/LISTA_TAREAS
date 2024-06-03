// src/App.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Button, AppBar, Toolbar, Paper, Grid, IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h3: {
      marginBottom: '1rem',
    },
  },
});

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [orden, setOrden] = useState("asc");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = (a, b) => {
    if (orden === "asc") {
      return new Date(a.fecha) - new Date(b.fecha);
    } else {
      return new Date(b.fecha) - new Date(a.fecha);
    }
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  tareasFiltradas = tareasFiltradas.sort(ordenarTareas);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Lista de Tareas
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
              <Typography variant="h3" component="h1">
                Lista de Tareas
              </Typography>
              <TareaForm agregarTarea={agregarTarea} />
              <Filtros filtrarTareas={filtrarTareas} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOrden(orden === "asc" ? "desc" : "asc")}
                startIcon={<SortIcon />}
                style={{ margin: '1rem 0' }}
              >
                Ordenar por Fecha {orden === "asc" ? "Descendente" : "Ascendente"}
              </Button>
              <ListaTareas
                tareas={tareasFiltradas}
                eliminarTarea={eliminarTarea}
                editarTarea={editarTarea}
                toggleCompletada={toggleCompletada}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
