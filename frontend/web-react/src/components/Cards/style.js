import { makeStyles, fade } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 300,
        marginBottom: theme.spacing(2)
      },
    media: {
        height: 140,
      },
}))