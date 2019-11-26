import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import useStyle from './style';
import AddBanner from '../AddBanner/AddBanner';


function HotNews(props) {
  const { hotNews, setCurrentNews } = props;
  const history = useHistory();
  const classes = useStyle();

  return (
    <div>
      <Card className={classes.titleCard}>
        <CardActionArea onClick={() => {
          history.push('/'); 
        }}>
          <CardContent className={classes.title}>
            <Typography gutterBottom variant="h5" component="h2">
              Все новости
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {
        hotNews.map((value, id) => (    
          <div key={id}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => {
                history.push(`/news/${value.id}`); 
              }}
              className={classes.action}
              >
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
                    {value.shortHeader}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))
      }
      <AddBanner/>
    </div>
  );
}




export default HotNews;