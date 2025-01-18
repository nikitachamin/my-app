import { useState } from "react";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

function GetTemperature() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');


  function handleChangeCelsiues(e) {
    setCelsius(e.target.value);
    if(e.target.value){
        setFahrenheit(e.target.value*1.8 + 32)
    } else {
        setFahrenheit('')
    }
}

  function handleChangeFahrenheit(e) {
    setFahrenheit(e.target.value);
    if(e.target.value){
        setCelsius((e.target.value-32) *5/9)
    } else {
        setCelsius('')
    }
    
  }

  return (
    <div>
      <TextField
        onChange={handleChangeCelsiues}
        value={celsius}
        label="°C"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">°C</InputAdornment>
            ), 
          },
        }}
      >  </TextField>
       <TextField
        onChange={handleChangeFahrenheit}
        label="℉"
        value={fahrenheit}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">℉</InputAdornment>
            ),
          },
        }}
      > {fahrenheit} привет</TextField>

    </div>
  );
}

export default GetTemperature;
