import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import { getTagNews } from '../../helpers/apiHelpers';
import useStyles from './style';
import photo from '../../static/nature.jpg';

export default function TagNews(props) {
  const { cards, setCards, setCurrentNews } = props;
  const params = useParams();
  const classes = useStyles();
  const [redirect, setRedirect] = useState({flag: false, endpoint: ''});

  console.log(params);
  useEffect(() => {
    const fetchTagNews = async tag => {
      const result = await getTagNews(tag);
      console.log(result);
      if (result.success) {
        setCards(result.entity);
        console.log(cards);
      }
    };
    fetchTagNews(params.tag);
  }, []);

  if (redirect.flag) return <Redirect to={`/news/${redirect.endpoint}`}/>;

  return (
    <div style={{marginTop: '70px'}}>
      {
        cards.map((value) => (
          <div key={value.id} className={classes.items}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => {
                setCurrentNews(value.id);
                setRedirect({flag: true, endpoint: value.id}); 
              // history.push('/');
              }}>
                <CardMedia
                  className={classes.media}
                  image={photo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.name}
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