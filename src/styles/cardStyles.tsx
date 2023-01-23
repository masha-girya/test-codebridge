import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
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