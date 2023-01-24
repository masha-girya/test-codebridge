import React, { useContext } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import arrowLeft from '../../icons/arrow-left.svg';
import { makeStyles } from '@material-ui/core';
import { ArticleContext } from '../Context/ArticleContext';

const useStyles = makeStyles({
  summary: {
    marginTop: 20,
  },
  readMore: {
    paddingLeft: 8,
    color: '#363636',
    fontWeight: 600,
  }
});

export const ArticlePage: React.FC = () => {
  const { article } = useContext(ArticleContext);
  const classes = useStyles();

  return (
    <div className="ArticlePage">
      <Box className="ArticlePage__container">
        <Box className="ArticlePage__image-box">
          <img
            src={article?.imageUrl}
            alt={article?.title}
            className="ArticlePage__image-box--img"
          />
        </Box>

        <div className="ArticlePage__content-box">
          <Box className="ArticlePage__text">
            <Typography
              sx={{ mb: 6 }}
              color="textPrimary"
              variant="h5"
              component="h5"
              className="ArticlePage__text--title"
            >
              {article?.title}
            </Typography>

            <Typography
              sx={{ letterSpacing: 1.5 }}
              color="textPrimary"
              variant="body2"
              component="p"
            >
              {article?.summary}
            </Typography>
          </Box>

          <Box className="ArticlePage__bottom-container">
            <Link
              component={RouterLink} 
              to="/"
              className={classes.readMore}
            >
              <img
                src={arrowLeft}
                alt="Back to homepage"
                className="arrow--left"
              />
              <span className="ArticlePage__bottom-container--text">
                Back to homepage
              </span>
            </Link>
          </Box>
        </div>
      </Box>
    </div>
  );
};
