import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import useStyles from './style'
import photo from '../../static/nature.jpg'



export default function Cards(props) {
    const classes = useStyles();
    // const { header, text } = props;
    const { cards } = props;

    return(
        cards.map((value, id) => (
            <div key={id} className={classes.items}>
         <Card className={classes.card}>
             <CardActionArea>
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

        // <div className={classes.items}>
        // <Card className={classes.card}>
        //     <CardActionArea>
        //         <CardMedia
        //             className={classes.media}
        //             image={photo}
        //             title="Contemplative Reptile"
        //         />
        //         <CardContent>
        //         <Typography gutterBottom variant="h5" component="h2">
        //     {header}
        //   </Typography>
        //   <Typography variant="body2" color="textSecondary" component="p">
        //     {text}
        //   </Typography>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
        // </div>
    );
}