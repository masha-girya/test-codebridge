import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { App } from './App';
import { ArticleProvider } from './components/Context/ArticleContext';

const mainTheme = createTheme({
  components: {
    MuiGrid: {
      defaultProps: {
        mt: 0,
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#E5E5E5',
      contrastText: '#363636',
    },
  }
});

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <React.StrictMode>
    <ArticleProvider>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ArticleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// root.render(
//   <React.StrictMode>
//     <ArticleProvider>
//       <ThemeProvider theme={mainTheme}>
//         <Router>
//           <App />
//         </Router>
//       </ThemeProvider>
//     </ArticleProvider>
//   </React.StrictMode>
// );
