import { makeStyles, fade } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

export default makeStyles((theme) => ({
  root: {
  },
  toolbar: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '56px',
    [theme.breakpoints.down ('xs')]: {
      justifyContent: 'space-between'
    },
  },
  items: {
    display: 'flex',
    [theme.breakpoints.down ('xs')]: {
      display: 'none',
    },
  },
  mobileItem: {
    display: 'flex',
    [theme.breakpoints.up ('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bottomLine: {
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.up ('lg')]: {
      width: '60%'
    },
    [theme.breakpoints.down ('lg')]: {
      width: '60%'
    },
    [theme.breakpoints.down ('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down (950)]: {
      width: '80%'
    },
    [theme.breakpoints.down (850)]: {
      width: '85%'
    },
    [theme.breakpoints.down (800)]: {
      width: '90%'
    },
    [theme.breakpoints.down (750)]: {
      width: '95%'
    },
    [theme.breakpoints.down (700)]: {
      width: '80%'
    },
    [theme.breakpoints.down ('xs')]: {
      width: '75%'
    },
    [theme.breakpoints.down (550)]: {
      width: '80%'
    },
    [theme.breakpoints.down (450)]: {
      width: '90%'
    },
    borderBottom: '2px solid black',
    marginTop: '85px',
  }
}));