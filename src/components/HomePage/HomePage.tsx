import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import { getArticles } from '../../api/fetchData';
import { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';
import { Loader } from '../Loader';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@material-ui/icons/Search';
import { normalizedDescription, normalizedTitle, debounce } from '../../utils/normailizing';

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [loader, setLoader] = useState(true);
  const theme = useTheme();

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
      <Container maxWidth="lg" component="div">
        <FormControl fullWidth sx={{'max-width': 600, height: 80, fontFamily: theme.typography.fontFamily }}>
          <InputLabel
            htmlFor="outlined-basic"
            size="normal"
            sx={{
              position: 'relative',
              fontFamily: theme.typography.fontFamily,
              fontWeight: 600,
              fontSize: 18,
              left: -12,
            }}
          >
            Filter by keywords
          </InputLabel>
          <OutlinedInput
            type="search"
            id="outlined-basic"
            className="input"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            placeholder="The most successful IT companies in 2020"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              applyQuery(event.target.value);
            }}
          />
        </FormControl>

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
