import React from 'react';
import { AppBar, Typography, InputBase, Toolbar, ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style'

export default function AppToolBar() {
    const classes = useStyle();
    
    return (
        <div className={classes.root}>
        <AppBar position="fixed">
          
          <Toolbar style={{backgroundColor: 'black'}}>
            {/* <Typography className={classes.title} noWrap>
              Main News
            </Typography> */}
            <div className={classes.items}>
            <ListItem button component='a' href='/'>
				      <ListItemText primary='Home'/>
			      </ListItem>
            <ListItem button component='a' href='/'>
				    <ListItemText primary='Home'/>
			        </ListItem>
            <ListItem button component='a' href='/'>
				      <ListItemText primary='Home'/>
			      </ListItem>
            <ListItem button component='a' href='/'>
				      <ListItemText primary='Home'/>
			      </ListItem>
            <ListItem button component='a' href='/'>
				      <ListItemText primary='Home'/>
			      </ListItem>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                  <Search/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            </div>
          </Toolbar>
          
        </AppBar>
      </div>
    )
}