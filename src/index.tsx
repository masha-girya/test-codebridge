import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from './theme/theme';
import { App } from './App';
import { ArticleProvider } from './components/Context/ArticleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ArticleProvider>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ArticleProvider>
  </React.StrictMode>
);
