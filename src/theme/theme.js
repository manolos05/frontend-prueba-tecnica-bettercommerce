import { createTheme } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#EB00D3',
      
    },
    secondary: {
      main: '#F5F4F4',
    },
    error: {
        main:'#000000',
    }
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme
