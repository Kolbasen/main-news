import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import { getTagNews } from '../../helpers/apiHelpers';
import useStyles from './style';

const API_URL = process.env.REACT_APP_API_URL;

export default function TagNews(props) {
  const { cards, setCards, setCurrentNews } = props;
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchTagNews = async tag => {
      const result = await getTagNews(tag);
      console.log(result);
      if (result.success) {
        setCards(result.entity);
        console.log(cards);
        setIsLoading(false)
      }
    };
    fetchTagNews(params.tag);
  }, []);

  if (isLoading) return <h1 style={{marginTop: '70px'}}>Is Loading...</h1>
  
  return (
    <div style={{marginTop: '70px'}}>
      {
        cards.map((value) => (
          <div key={value.id} className={classes.items}>
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
        ))
      }
    </div>
  );
}