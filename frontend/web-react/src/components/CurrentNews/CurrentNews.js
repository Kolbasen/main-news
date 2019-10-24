import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import HotNewsContainer from '../HotNews/HotNewsContainer'
import useStyles from './style';
import { getOneNews, getHotNews } from '../../helpers/apiHelpers';
import { connect } from 'react-redux';
import {setCards} from '../../store/cards/actions';
import { setHotNews } from '../../store/hotNews/actions';
import { setCurrentNews } from '../../store/currentNews/actions';

function CurrentNews(props) {
  const classes = useStyles();
  const params = useParams();
  const { id } = params;
  const { setHotNews } = props;
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchOneNews = async id => {
      try {
        const [oneNews, hotNews] = await Promise.all([getOneNews(id), getHotNews()]);
        if (oneNews.success && hotNews.success) {
          setHotNews(hotNews.entity);
          setCard(oneNews.entity);
          setIsLoading(false);
        } else {
          console.log('Something went wrong');
        }
      } catch(error) {
        console.log('Request error: ');
        console.log(error);
      }
    }; 
    fetchOneNews(id);
  }, [id, setHotNews]);

  if (isLoading) return <div>Is Loading...</div>;
  console.log(card)
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`http://localhost:8000/static/${card.photo}`}
            title="Contemplative Reptile"
          />
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{marginLeft: '30px'}}>
        <HotNewsContainer/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    cards: state.cards.cards,
    id: state.id.id,
    hotNews: state.hotNews.hotNews};
};

const mapActionsToProps = {
  setCurrentNews,
  setCards,
  setHotNews
};

export default connect(mapStateToProps, mapActionsToProps)(CurrentNews);