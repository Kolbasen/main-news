import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
      position: 'fixed',
      display: 'flex',
      bottom: 10,
      right: 40,
      [theme.breakpoints.down (600)]: {
        display: 'none'
      },
      [theme.breakpoints.down (700)]: {
        display: 'none'
      },
      [theme.breakpoints.down (1000)]: {
        right: 0
      },
  },
  list: {
    display: 'flex'
  },
  button: {
    fontSize: '3em'
  },
  currentNewsContent: {
    position: 'fixed',
      bottom: 10,
      right: 0,
      [theme.breakpoints.up (1100)]: {
        right: 30,
      },
      [theme.breakpoints.down (1000)]: {
        display: 'none'
      },
  }
}));