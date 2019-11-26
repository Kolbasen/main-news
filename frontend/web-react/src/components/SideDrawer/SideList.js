import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';	
import Link from '@material-ui/core/Link';	
import useStyles from './style';
import Email from '../../email.png';
import Telegram from '../../telegram-icon.png';
import { ListItemIcon } from '@material-ui/core';


const SideList = (props) => {
  const { toggleDrawer } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItem button component='a' onClick={() => history.push('/')}>
        <ListItemText primary='Домой'/>
      </ListItem>
      <ListItem button component='a' onClick={() => history.push('/news/tag/world')}>
        <ListItemText primary='Мир'/>
      </ListItem>
      <ListItem button component='a' onClick={() => history.push('/news/tag/politics')}>
        <ListItemText primary='Политика'/>
      </ListItem>
      <ListItem button component='a' onClick={() => history.push('/news/tag/ukraine')}>
        <ListItemText primary='Украина'/>
      </ListItem>
      <ListItem button component='a' onClick={() => history.push('/news/tag/russia')}>
        <ListItemText primary='Россия'/>
      </ListItem>
      <ListItem button component='a' onClick={() => history.push('/news/tag/technology')}>
        <ListItemText primary='Технологии'/>
      </ListItem>
      <ListItem component='a'>
        <a href='mailto:realmainnews@gmail.com' target='__blank'>
          <img src={Email} height='45' width='35'/>
        </a>
        <div style={{marginLeft: 15}}/>
        <a className={classes.a} href='https://t.me/realmainnews' target='__blank'>
          <img  src={Telegram} height='30' width='30' />
        </a>
      </ListItem>
    </div>
  );
};
export default SideList;