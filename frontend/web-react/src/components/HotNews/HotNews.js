import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import useStyle from './style';


function HotNews(props) {
  const { hotNews, setCurrentNews } = props;
  const history = useHistory();
  const classes = useStyle();

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
                console.log(history.id);
                setCurrentNews(value.id);
                history.push(`/news/${value.id}`); 
              }}>
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




export default HotNews;