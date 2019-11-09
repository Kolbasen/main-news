import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
      position: 'fixed',
      bottom: 50,
      right: 150,
      [theme.breakpoints.down (600)]: {
        display: 'none'
      },
  },
}));