import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import useStyle from './style'
const arr = [0, 1 ,2 ,3 ,4, 5]

export default function HotNews() {
    const classes = useStyle();

    return (
        <div>

            {
                arr.map((value, id) => (
                    <Card className={classes.card} key={id}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Header
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
    </div>
    )
}