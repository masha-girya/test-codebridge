import React, { useState } from 'react';
import { Article } from '../../types/Article';

interface ArticleProps {
  article: Article | null,
  setArticle: (artc: Article | null) => void,
}

export const ArticleContext = React.createContext<ArticleProps>({
  article: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setArticle: () => {},
});

interface ChildrenProps {
  children: React.ReactNode,
}

export const ArticleProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [article, setArticle] = useState<Article | null>(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      { children }
    </ArticleContext.Provider>
  );
};
