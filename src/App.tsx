import React, { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { ArticlePage } from './components/ArticlePage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="articles" >
        <Route path=":id" element={<ArticlePage />} />
      </Route>
      
      <Route path="home" element={<Navigate to="/" replace/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
