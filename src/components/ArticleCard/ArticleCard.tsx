import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import CalendarTodayOutlineIcon from '@material-ui/icons/CalendarTodayOutlined';
import { Article } from '../../types/Article';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 530,
  },
  media: {
    height: "217px"
  },
  icon: {
    width: "16px"
  }
});

interface Props {
  data: Article,
}

export const ArticleCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { title, imageUrl, summary, publishedAt } = data;

  const normalizedDate = (date: string) => {
    const normDate = new Date(date)
      .toUTCString()
      .split(' ')
      .slice(1, 4);
    normDate[0] = normDate[0] + 'th';
    normDate[1] = normDate[1] + ',';

    return normDate.join(' ');
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={title}
      />

      <CardContent>
        <Typography 
          gutterBottom
          color="textSecondary"
          component="p"
          className="card__date"
        >
          <CalendarTodayOutlineIcon className={classes.icon} />
          {'  '}
          {normalizedDate(publishedAt)}
        </Typography>

        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};
