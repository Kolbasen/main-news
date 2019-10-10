import React from 'react';
import { AppBar, Typography, InputBase, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style'

export default function AppToolBar() {
    const classes = useStyle();
    
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <div className={classes.items}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Main News
            </Typography>
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
          </Toolbar>
          </div>
        </AppBar>
      </div>
    )
}