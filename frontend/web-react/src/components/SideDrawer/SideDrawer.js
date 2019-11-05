import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SideList from './SideList';
import useStyles from './style';

function SideDrawer(props) {
	const { sideDrawerOpen, toggleDrawer } = props;
	const classes = useStyles();
	return (
		<div>
			<Drawer open={sideDrawerOpen} onClose={toggleDrawer(false)}>
				{<SideList toggleDrawer={toggleDrawer}/>}
			</Drawer>
		</div>
	);
}

export default SideDrawer;