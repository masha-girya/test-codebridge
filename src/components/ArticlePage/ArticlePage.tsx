import React, { useContext } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import arrowLeft from '../../icons/arrow-left.svg';
import { useStyles } from '../../styles/cardStyles';
import { ArticleContext } from '../Context/ArticleContext';

export const ArticlePage: React.FC = () => {
  const { article } = useContext(ArticleContext);
  const classes = useStyles();

  return (
    <div className="ArticlePage">
      <Box className="ArticlePage__container">
        <Box className="ArticlePage__image-box">
          <img src={article?.urlToImage} alt={article?.title} className="ArticlePage__image-box--img" />
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
              {article?.description}

              {/* At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
              In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.

              Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut sagittis proin enim.
              Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque consectetur.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
              Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. */}
            </Typography>
          </Box>

          <Box className="ArticlePage__bottom-container">
            <Link
                component={RouterLink} 
                to={`/home`}
                className={classes.readMore}
              >
                <img
                  src={arrowLeft}
                  alt="Back to homepage"
                  className="arrow--left"
                />
                Back to homepage
              </Link>
          </Box>
        </div>
      </Box>
    </div>
  );
};
