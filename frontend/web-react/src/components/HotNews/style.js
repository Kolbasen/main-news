import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '70px'
  },
  card: {
    display: 'flex',
    width: 280,
    height: 103,
    marginBottom: theme.spacing(2),
    padding: 0
  },
  cardContent: {
    padding: 0,
  },
  media: {
    height: 140,
  },
  titleCard: {
    display: 'flex',
    width: 280,
    height: 80,
    marginBottom: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  }
}));