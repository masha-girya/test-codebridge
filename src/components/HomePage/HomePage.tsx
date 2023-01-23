import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { getArticles } from '../../api/fetchData';
import { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';
import type {} from '@mui/lab/themeAugmentation';
import { 
  createTheme,
  FormControl,
  InputAdornment,
  InputLabel,
  ThemeProvider,
  OutlinedInput,
  Typography
} from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiGrid: {
      defaultProps: {
        mt: 0,
      },
    },
  },
});


export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  const loadData = async () => {
    try{
      const dataFromServer = await getArticles();

      if (dataFromServer) {
        setArticles(dataFromServer.articles);
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
      <Container maxWidth="lg" component="div">
        <FormControl fullWidth sx={{'max-width': 600, height: 50 }}>
          <InputLabel htmlFor="outlined-basic">Filter by keywords</InputLabel>
          <OutlinedInput
            type="search"
            id="outlined-basic"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            placeholder="The most successful IT companies in 2020"
            label="Filter by keywords"
          />
        </FormControl>

        <Typography
          color="textPrimary"
          component="p"
          fontWeight={600}
          marginTop={5}
          className="results"
        >
          {`Results: ${articles?.length}`}
        </Typography>

        <ThemeProvider theme={theme}>
          <Grid
            container
            component="div"
            justifyContent="space-evenly"
            columnSpacing={3}
            rowSpacing={4}
          >
            {articles?.map(article => (
              <Grid item key={article.source.id}>
                <ArticleCard data={article} key={article.source.id} />
              </Grid>
              ))}
          </Grid>
        </ThemeProvider>
      </Container>
    </main>
  )
}
