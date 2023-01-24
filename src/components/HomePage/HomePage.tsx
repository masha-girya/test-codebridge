import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import { getArticles } from '../../api/fetchData';
import { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';
import type {} from '@mui/lab/themeAugmentation';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  ThemeProvider,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { theme } from '../../styles/cardStyles';
import { normalizedDescription, normalizedTitle, debounce } from '../../utils/normailizing';

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000), []);

  const loadData = async () => {
    try{
      let dataFromServer;

      dataFromServer = await getArticles();

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

  const filteredTitle = useMemo(() => {
    return articles?.filter(card => {
      const cuttedTitle = normalizedTitle(card.title);
  
      const queryTitle = cuttedTitle.toLowerCase().includes(appliedQuery.toLowerCase());
  
      return queryTitle;
    }) || []
  }, [articles, appliedQuery])

  const filteredDesc = useMemo(() => {
    return articles?.filter(card => {
      const cuttedDesc = normalizedDescription(card.summary);
  
      const queryDesc = cuttedDesc.toLowerCase().includes(appliedQuery.toLowerCase()) && !filteredTitle.find(c => c.id === card.id);
  
      return queryDesc;
    }) || [];
  }, [articles, appliedQuery, filteredTitle])

  const visibleArticles = [...filteredTitle, ...filteredDesc];
  
  return (
    <main>
      <Container maxWidth="lg" component="div">
        <FormControl fullWidth sx={{'max-width': 600, height: 80 }}>
          <InputLabel htmlFor="outlined-basic" size="normal">
            Filter by keywords
          </InputLabel>
          <OutlinedInput
            type="search"
            id="outlined-basic"
            className="input"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            placeholder="The most successful IT companies in 2020"
            label="Filter by keywords"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              applyQuery(event.target.value)
            }}
          />
        </FormControl>

        <p className="results">
          {`Results: ${visibleArticles?.length}`}
        </p>

        <ThemeProvider theme={theme}>
          <Grid
            container
            component="div"
            justifyContent="space-evenly"
            alignItems="start"
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
        </ThemeProvider>
      </Container>
    </main>
  )
}
