import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import useStyles from './style'
import photo from '../../static/nature.jpg'


export default function Cards() {
    const classes = useStyles();

    return(
        <div className={classes.items}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    );
}