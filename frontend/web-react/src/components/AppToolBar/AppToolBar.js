import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Typography, Toolbar, ListItem, ListItemText, IconButton } from '@material-ui/core';
import SideDrawer from '../SideDrawer/SideDrawer'
import MenuIcon from '@material-ui/icons/Menu';
import useStyle from './style';
import logo from '../../logo.jpg'

export default function AppToolBar() {
  const classes = useStyle();
  const history = useHistory();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setSideDrawerOpen(open);
	};
  console.log(sideDrawerOpen)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.items}>
            <ListItem button component='button'  onClick={() => history.push('/')}>
				      <IconButton>
                <img src={logo} width='25' height='25'></img>
              </IconButton>
            </ListItem>
            <ListItem button component='button'  onClick={() => history.push('/news/tag/world')}>
				      <ListItemText primary='Мир'/>
			      </ListItem>
            <ListItem button component='button'  onClick={() => history.push('/news/tag/politics')}>
				    <ListItemText primary='Политика'/>
			        </ListItem>
            <ListItem button component='button'  onClick={() => history.push('/news/tag/ukraine')}>
				      <ListItemText primary='Украина'/>
			      </ListItem>
            <ListItem button component='button'  onClick={() => history.push('/news/tag/russia')}>
				      <ListItemText primary='Россия'/>
			      </ListItem>
            <ListItem button component='button'  onClick={() => history.push('/news/tag/technology')}>
				      <ListItemText primary='Технологии'/>
			      </ListItem>
          </div>
          <div className={classes.mobileItem}>
            <ListItem button component='button'  onClick={() => {setSideDrawerOpen(prevState => !prevState); console.log(1)}}>
                <MenuIcon fontSize='large'/>
            </ListItem>
          </div>
          <div className={classes.mobileItem}>
          <ListItem button component='button'  onClick={() => history.push('/')}>
				      <IconButton>
                <img src={logo} width='25' height='25'></img>
              </IconButton>
            </ListItem>
          </div>
        </Toolbar>
      </AppBar>
      <SideDrawer toggleDrawer={toggleDrawer} sideDrawerOpen={sideDrawerOpen}/>
      <div className={classes.bottomLine}/>
    </div>
  );
}