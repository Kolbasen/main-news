import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, ListItem, ListItemText, IconButton } from '@material-ui/core';
import SideDrawer from '../SideDrawer/SideDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import useStyle from './style';
import logo from '../../logo2.png';

const map = new Map([]);
map.set('world', 'Мир')
  .set('politics', 'Политика')
  .set('ukraine', 'Украина')
  .set('russia', 'Россия')
  .set('technology', 'Технологии');

export default function AppToolBar(props) {
  const { oneCard } = props;
  const classes = useStyle();
  const history = useHistory();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tag, setTag] = useState(null);
  const [date, setDate] = useState(null);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideDrawerOpen(open);
  };

  useEffect(() => {
    if (oneCard) {
      if (history.location.pathname.match(/news\/([0-9])+/)) {
        const fullDate = new Date(oneCard.createdAt);
        const date = fullDate.toLocaleDateString().split('/').join('.');
        setDate(date);
        setTag(oneCard.tags);
      } else {
        setTag(null);
        setDate(null);
      }
    }
  }, [history.location, oneCard]);
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.items}>
            <ListItem button component='button'  onClick={() => history.push('/')}>
				      <IconButton>
                <img src={logo} width='42' height='25'></img>
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
            <ListItem button component='button'  onClick={() => {setSideDrawerOpen(prevState => !prevState);}}>
              <MenuIcon fontSize='large'/>
            </ListItem>
          </div>
          <div className={classes.mobileItem}>
            <ListItem button component='button'  onClick={() => history.push('/')}>
				      <IconButton>
                <img src={logo} width='42' height='25'></img>
              </IconButton>
            </ListItem>
          </div>
        </Toolbar>
      </AppBar>
      <SideDrawer toggleDrawer={toggleDrawer} sideDrawerOpen={sideDrawerOpen}/>
      <div className={classes.bottomLine}>
        <div>
          {date} {date ? ',' : null} {map.get(tag)}
        </div>
      </div>
    </div>
  );
}