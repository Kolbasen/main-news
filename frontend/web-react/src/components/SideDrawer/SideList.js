import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';		
import useStyles from './style';


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
    </div>
  );
};
export default SideList;