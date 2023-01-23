import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ArticlePage } from './components/ArticlePage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => {
  return (
    <div>
      <header>
        Hello
      </header>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<ArticlePage />} />
          <Route path="home" element={<Navigate to="/" replace/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
