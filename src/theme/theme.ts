import { createTheme } from '@material-ui/core/styles';

export const mainTheme = createTheme({
  typography: {
   "fontFamily": `"Montserrat", "Helvetica", "Roboto", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
   "fontWeightBold": 600
  },
  palette: {
    primary: {
      main: '#E5E5E5',
      contrastText: '#363636',
    },
  }
});