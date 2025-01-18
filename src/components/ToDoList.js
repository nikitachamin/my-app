import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function revomeItemByKey(itemKey) {
    setTodos(currentState => currentState.filter(function (item, index, arr){
         return index !== itemKey
    }));
    console.log(itemKey);

    
}
  return (
    <div>
      <h1>Todo list</h1>
      <div>
      <TextField
        fullWidth
        onChange={handleChange}
        label="Дело в список"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "100ch" }}
      >  </TextField>
     
      
        </div>
        <Button onClick={handleSubmit} variant="contained">Add Todo</Button>
      <List >
        {todos.map((todo, index)=>(
          <ListItem 
            key={index}
           
            
            secondaryAction={
              <IconButton  onClick={() => { revomeItemByKey(index) }}edge="end" aria-label="delete">
                <DeleteIcon  />
              </IconButton>
            }
          >
            <ListItemText
              primary={todo}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
