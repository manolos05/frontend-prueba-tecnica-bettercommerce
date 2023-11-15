import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';

const pages= ['SHOP ALL', 'BEST SELLER', 'PROTEÍNAS', 'SUPLEMENTOS', 'PRE ENTRENOS', 'ACCESORIOS', 'BARRAS Y SNACK']

export default function ButtonAppBar() {
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="center">
          <Typography variant="h4" component="div">
            BRAND
          </Typography>
        </Grid>
      </Toolbar>
        <Toolbar>
        {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="center" variant="p" component="div">{page}</Typography>
                </MenuItem>
              ))}
        <Grid container alignItems="center" justifyContent="end">
        <Button color="inherit">
                <SearchIcon />
          </Button>
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
            </Grid>
          </Toolbar>
      </AppBar>
    </Box>

  );
}
