import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Typography, Toolbar, ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style';

export default function AppToolBar() {
  const classes = useStyle();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.items}>
            <ListItem button component='button'  onClick={() => history.push('/')}>
				      <ListItemText primary='Домой'/>
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
        </Toolbar>
          
      </AppBar>
    </div>
  );
}