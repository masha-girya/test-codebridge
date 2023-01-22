import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/fetchData';
import { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';
import { QueryForm } from '../QueryForm/QueryForm';

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);

  const loadData = async () => {
    try{
      const dataFromServer = await getArticles();

      if (dataFromServer) {
        setArticles(dataFromServer);
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  })

  return (
    <main> 
      <QueryForm />
      {articles?.map(article => (
        <ArticleCard data={article} key={article.id} />
        ))}
    </main>
  )
}
