import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: '70px',
    justifyContent: 'center',
  },  
  items: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    marginRight: 40
  },
  card: {
    width: 300,
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 140,
  },
}));