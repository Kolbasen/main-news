import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  elements: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 2, 0, 2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#000000'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginBottom: theme.spacing(1)
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 380,
    height: 223
  }
}));