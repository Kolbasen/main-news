import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import useStyles from './style';
import { getTenCards } from '../../helpers/apiHelpers';
import useInfiniteScroll from '../../helpers/useInfiniteScrollHelper';

const API_URL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}` : 'http://localhost:8000';

function Cards(props) {
  const { cards, setCards, setCurrentNews } = props;
  const history = useHistory();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [currId, setCurrId] = useState(-1);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [newsLeft, setNewsLeft] = useState(true);

  function fetchMoreListItems() {
    const fetchingMoreCards = async (currId) => {
      const result = await getTenCards(currId);
      if (!result.entity.length) setNewsLeft(false);
      if (result.success && result.entity.length) {
        setIsFetching(false);
        const newCards = cards.concat(result.entity);
        setCards(newCards);
        setCurrId(result.entity[result.entity.length - 1].id);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchingMoreCards(currId);
  }

  useEffect(() => {
    const fetchStartingData = async currId => {
      const result = await getTenCards(currId);
      if (result.success) {
        setCurrId(result.entity[result.entity.length - 1].id);
        setCards(result.entity);
        setIsLoading(false);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchStartingData(currId);
  }, [currId, setCards]); 

  if (isLoading) return <h1>Is Loading...</h1>;
  
  return(
    <div style={{marginTop: '80px'}}>
      {cards.map((value, id) => (
        <div key={id} className={classes.items}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => {
              setCurrentNews(value.id);
              history.push(`/news/${value.id}`);
            }}>
              <CardMedia
                className={classes.media}
                image={`${API_URL}/${value.photo}`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.shortHeader}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
      {isFetching && newsLeft ? 'Fetching more cards' : null}
    </div>
  );
}

export default Cards;