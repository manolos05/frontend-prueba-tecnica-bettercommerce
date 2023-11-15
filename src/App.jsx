
import { Box, Button, useTheme, InputLabel} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
// import './App.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

import { NavBar } from './components/navbar/NavBar';
import { Footer } from './components/footer/Footer';

 
function App() {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const theme = useTheme()
  
  return (
    <>
    <NavBar />

    <Footer />
    <Button variant="contained" size="large" color="secondary"><AdbIcon />Cualquier Verga</Button>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" shrink={false}>Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
 
    </>
  )

}

export default App
