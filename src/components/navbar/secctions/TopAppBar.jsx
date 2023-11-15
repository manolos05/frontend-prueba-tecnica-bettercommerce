import * as React from 'react';
import { useTheme} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';

//icons
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



export default function TopAppBar() {

    const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
           15% OFF EN TODO LOS PRODUCTOS CON EL CODIGO: XX15OFF
          </Typography>
          <PersonIcon /> <p>Iniciar Sesion</p> |
          <LocalShippingIcon /> <p>Seguimiento</p> |
          <ShoppingBagIcon /> <p>Tiendas</p>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
