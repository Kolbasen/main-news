import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
  },
  card: {
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
}));