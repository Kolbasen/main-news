import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import useStyles from './style';
import { getTenCards } from '../../helpers/apiHelpers';
import useInfiniteScroll from '../../helpers/useInfiniteScrollHelper';



function Cards(props) {
  const { cards, setCards, setCurrentNews } = props;
  const history = useHistory();
  const classes = useStyles();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [isLoading, setIsLoading] = useState(true);

  function fetchMoreListItems() {
    const fetchingMoreCards = async () => {
      const result = await getTenCards();
      if (result.success) {
        const newCards = cards.concat(result.entity);
        setCards(newCards);
        setIsFetching(false);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchingMoreCards();
  }

  useEffect(() => {
    const fetchStartingData = async () => {
      const result = await getTenCards();
      if (result.success) {
        console.log(result.entity);
        setCards(result.entity);
        setIsLoading(false);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchStartingData();
        
  }, []); 

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
                image={`http://localhost:8000/${value.photo}`}
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
      {isFetching ? 'Fetching more cards' : null}
    </div>
  );
}

export default Cards;