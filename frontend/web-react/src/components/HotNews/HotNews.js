import React, { useState } from 'react';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import useStyle from './style';


function HotNews(props) {
  const { hotNews, setCurrentNews } = props;
  const params = useParams();
  const history = useHistory();
  const classes = useStyle();
  // const [redirect, setRedirect] = useState({flag: false, endpoint: ''});

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
        hotNews.map((value, id) => (    
          <div key={id}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => {
              console.log(history.id)
              setCurrentNews(value.id);
              history.push(`/news/${value.id}`) 
            }}>
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




export default HotNews;