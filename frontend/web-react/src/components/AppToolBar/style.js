import { makeStyles, fade } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1
  },
  toolbar: {
    display: 'flex',
    backgroundColor: '#000000'
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));