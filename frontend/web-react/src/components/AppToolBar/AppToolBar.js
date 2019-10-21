import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AppBar, Typography, Toolbar, ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style';

export default function AppToolBar() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
          
        <Toolbar style={{backgroundColor: 'black'}}>
          <div className={classes.items}>
            <ListItem button component='a'  href='/'>
				      <ListItemText primary='Домой'/>
			      </ListItem>
            <ListItem button component='a'  href='/news/tag/world'>
				      <ListItemText primary='Мир'/>
			      </ListItem>
            <ListItem button component='a' href='/news/tag/politics'>
				    <ListItemText primary='Политика'/>
			        </ListItem>
            <ListItem button component='a' href='/news/tag/ukraine'>
				      <ListItemText primary='Украина'/>
			      </ListItem>
            <ListItem button component='a' href='/news/tag/russia'>
				      <ListItemText primary='Россия'/>
			      </ListItem>
            <ListItem button component='a' href='/news/tag/technology'>
				      <ListItemText primary='Технологии'/>
			      </ListItem>
          </div>
        </Toolbar>
          
      </AppBar>
    </div>
  );
}