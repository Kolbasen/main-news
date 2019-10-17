import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '70px'
  },
  card: {
    width: 150,
    height: 50,
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 140,
  },
}));