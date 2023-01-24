import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import { getArticles } from '../../api/fetchData';
import { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';
import { normalizedDescription, normalizedTitle, debounce } from '../../utils/normalizing';
import { QueryForm } from '../QueryForm';
import { Loader } from '../Loader';

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [loader, setLoader] = useState(true);

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  );

  const loadData = async () => {
    try{
      const dataFromServer = await getArticles();

      if (dataFromServer) {
        setArticles(dataFromServer);
      }
    } catch(error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    loadData();
  });

  const filteredTitle = useMemo(() => {
    return articles?.filter(card => {
      const cuttedTitle = normalizedTitle(card.title);
  
      const queryTitle = cuttedTitle.toLowerCase().includes(appliedQuery.toLowerCase());
  
      return queryTitle;
    }) || [];
  }, [articles, appliedQuery]);

  const filteredDesc = useMemo(() => {
    return articles?.filter(card => {
      const cuttedDesc = normalizedDescription(card.summary);
  
      const queryDesc = cuttedDesc.toLowerCase().includes(appliedQuery.toLowerCase()) && !filteredTitle.find(c => c.id === card.id);
  
      return queryDesc;
    }) || [];
  }, [articles, appliedQuery, filteredTitle]);

  const visibleArticles = [...filteredTitle, ...filteredDesc];
  
  return (
    <main>
      <Container maxWidth="lg" component="div" sx={{mt: 6, mb: 6}}>
        <QueryForm
          query={query}
          setQuery={setQuery}
          applyQuery={applyQuery}
        />

        {loader
          ?(<Loader />)
          : (
            <>
              <p className="results">
                {`Results: ${visibleArticles?.length}`}
              </p>

              <Grid
                container
                component="div"
                justifyContent="start"
                columnSpacing={3}
                rowSpacing={4}
              >
                {visibleArticles?.map(article => (
                  <ArticleCard
                    data={article}
                    key={article?.id}
                    query={query}
                  />
                ))}
              </Grid>
            </>
          )}
      </Container>
    </main>
  );
};
