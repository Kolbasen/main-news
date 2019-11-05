import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: '25px',
    justifyContent: 'center',
  },  
  items: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    marginRight: 40,
    [theme.breakpoints.down ('xs')]: {
      marginRight: '0px',
    },
  },
  card: {
    width: 300,
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 140,
  },
  hotNews: {
    marginLeft: '30px',
    [theme.breakpoints.down ('xs')]: {
      marginLeft: '0px',
      display: 'none',
    },
  }
}));