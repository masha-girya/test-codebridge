import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Card, CardContent, CardMedia, CardActions, Typography, Link } from '@material-ui/core';

import CalendarTodayOutlineIcon from '@material-ui/icons/CalendarTodayOutlined';
import arrowRight from '../../icons/arrow-right.svg';

import { useStyles } from '../../styles/cardStyles';
import { normalizedDate, normalizedTitle, normalizedDescription } from '../../utils/normailizing';
import { Article } from '../../types/Article';
import { ArticleContext } from '../Context/ArticleContext';

interface Props {
  data: Article,
}

export const ArticleCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { setArticle } = useContext(ArticleContext);
  const { source, title, description, urlToImage, publishedAt } = data;

  const handleClick = (event: React.MouseEvent, articleToOpen: Article) => {
    setArticle(articleToOpen);
  }

  return (
    <Card className="Card">
      <RouterLink to={`articles/${source.id}`} onClick={(event) => handleClick(event, data)}>
        <CardMedia
          className={classes.media}
          image={urlToImage}
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
          {normalizedTitle(title)}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.summary}
        >
          {normalizedDescription(description)}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          component={RouterLink} 
          to={`/articles/${source.id}`}
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
  );
};
