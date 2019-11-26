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
    // display: 'flex',
    width: 380,
    maxWidth: 380,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down (600)]: {
      width: 300
    },
  },
  media: {
    height: 223,
    [theme.breakpoints.down (600)]: {
      height: 176
    },
  },
  hotNews: {
    marginLeft: '30px',
    [theme.breakpoints.down (750)]: {
      marginLeft: '0px',
      display: 'none',
    },
  },
}));