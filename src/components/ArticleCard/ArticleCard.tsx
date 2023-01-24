import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Card, CardContent, CardMedia, CardActions, Typography, Link, makeStyles } from '@material-ui/core';

import CalendarTodayOutlineIcon from '@material-ui/icons/CalendarTodayOutlined';
import arrowRight from '../../icons/arrow-right.svg';

import { normalizedDate, normalizedTitle, normalizedDescription, highlightText } from '../../utils/normailizing';
import { Article } from '../../types/Article';
import { ArticleContext } from '../Context/ArticleContext';

interface Props {
  data: Article,
  query: string,
}

const useStyles = makeStyles({
  root: {
    maxWidth: 368,
    height: 530,
  },
  media: {
    height: 217
  },
  icon: {
    width: 16,
    marginRight: 10,
  },
  dateStamp: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    height: 65,
    marginTop: 24,
    overflow: 'hidden',
  },
  summary: {
    marginTop: 20,
  },
  readMore: {
    paddingLeft: 8,
    color: '#363636',
    fontWeight: 600,
  }
});

export const ArticleCard: React.FC<Props> = ({ data, query }) => {
  const { setArticle } = useContext(ArticleContext);
  const { id, title, summary, imageUrl, publishedAt } = data;
  const classes = useStyles();

  const cuttedTitle = normalizedTitle(title);
  const cuttedDesription = normalizedDescription(summary);

  const handleClick = (event: React.MouseEvent, articleToOpen: Article) => {
    setArticle(articleToOpen);
  }

  return (
    <Grid item>
      <Card className="Card">
        <RouterLink to={`articles/${id}`} onClick={(event) => handleClick(event, data)}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title={title}
          />
        </RouterLink>

        <CardContent>
          <Typography
            className={classes.dateStamp}
            gutterBottom
            color="textSecondary"
            component="p"
          >
            <CalendarTodayOutlineIcon className={classes.icon} />
            {'  '}
            {normalizedDate(publishedAt)}
          </Typography>

          <Typography 
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {highlightText(cuttedTitle, query)}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.summary}
          >
            {highlightText(cuttedDesription, query)}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            component={RouterLink}
            to={`/articles/${id}`}
            className={classes.readMore}
          >
            Read more
            <img 
              src={arrowRight}
              alt="Read more arrow"
              className="arrow"
            />
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
