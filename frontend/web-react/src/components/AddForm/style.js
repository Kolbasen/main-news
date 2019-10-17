import { makeStyles } from '@material-ui/core';
import { maxWidth } from '@material-ui/system';
export default makeStyles((theme) => ({
	elements: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'absolute',
		zIndex: '50',
		backgroundColor: '#51c4c4',
		maxWidth: '200px',
		top: '150px',
		left: 0
	},
	form: {
		width: '100%',
		padding: theme.spacing(0, 2, 0, 2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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
	buttons: {
		position: 'absolute',
		zIndex: '200',
		bottom: 40,
		right: 60,
	},
	button: {
		margin: theme.spacing(1),
		backgroundColor: '#3f51b5'
	},
	buttonClicked: {
		backgroundColor: '#e02828'
	},
	saveButton: {
		position: 'absolute',
		bottom: 100,
		left: 0,
		zIndex: '200'
	}
}));