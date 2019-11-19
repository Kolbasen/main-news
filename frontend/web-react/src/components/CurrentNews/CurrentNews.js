import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import HotNewsContainer from '../HotNews/HotNewsContainer';
import useStyles from './style';
import { getOneNews, getHotNews } from '../../helpers/apiHelpers';


const API_URL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}` : 'http://localhost:8000';

function CurrentNews(props) {
  const classes = useStyles();
  const params = useParams();
  const { id } = params;
  const { setHotNews, currentNews, setCurrentNews, oneCard, setOneCard } = props;
  console.log(setOneCard)
  console.log(oneCard)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchOneNews = async id => {
      try {
        const [oneNews, hotNews] = await Promise.all([getOneNews(id), getHotNews()]);
        if (oneNews.success && hotNews.success) {
          setHotNews(hotNews.entity);
          setOneCard(oneNews.entity)
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
  }, []);

  if (isLoading) return <div>Is Loading...</div>;
  console.log(oneCard)
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`${API_URL}/${oneCard.photo}`}
            title="Contemplative Reptile"
          />
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{whiteSpace: 'pre-line'}}>
              {oneCard.header}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p" style={{whiteSpace: 'pre-line'}}>
              {oneCard.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.hotNews}>
        <HotNewsContainer/>
      </div>
    </div>
  );
}

export default CurrentNews;