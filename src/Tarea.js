// src/Tarea.js
import React, { useState } from 'react';
import { Checkbox, TextField, Button, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            variant="outlined"
            size="small"
            style={{ marginRight: '1rem' }}
          />
          <IconButton onClick={handleSaveClick} color="primary">
            <SaveIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={tarea} style={{ textDecoration: completada ? 'line-through' : 'none' }} />
          <ListItemSecondaryAction>
            <IconButton onClick={onDelete} edge="end" aria-label="delete" color="secondary">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEditClick} edge="end" aria-label="edit" color="primary">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Tarea;
