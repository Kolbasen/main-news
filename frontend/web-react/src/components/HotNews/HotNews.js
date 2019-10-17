import React, { useState } from 'react';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import useStyle from './style';
import { connect } from 'react-redux';
import { setCards } from '../../store/cards/actions';
import { setHotNews } from '../../store/hotNews/actions';
import {  setCurrentNews } from '../../store/currentNews/actions';

function HotNews(props) {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyle();
  const [redirect, setRedirect] = useState({flag: false, endpoint: ''});
  const { hotNews, setCurrentNews } = props;
  if (redirect.flag) return <Redirect to={`/news/${redirect.endpoint}`}/>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                                Hot news
          </Typography>
        </CardContent>
      </Card>
      {
        hotNews.map((value) => (    
          <Card className={classes.card} key={value.id}>
            <CardActionArea onClick={() => {
              console.log(value.id);
              // history.push(location.pathname)
              setCurrentNews(value.id);
              setRedirect({flag: true, endpoint: value.id}); 
            }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  id: state.id.id,
  hotNews: state.hotNews.hotNews
});

const mapActionsToProps = {
  setCurrentNews,
  setCards,
  setHotNews
};


export default connect(mapStateToProps, mapActionsToProps)(HotNews);