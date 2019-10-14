import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import HotNews from '../HotNews/HotNews'
import useStyles from './style'
import photo from '../../static/nature.jpg'
import { getOneNews } from '../../helpers/apiHelpers'
import { connect } from 'react-redux'
import {setCards} from '../../store/cards/actions'
import { setCurrentNews } from '../../store/currentNews/actions'

function CurrentNews(props) {
    const classes = useStyles();
    const { id } = props;
    const [card, setCard] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    console.log(id)
    useEffect(() => {
        const fetchOneNews = async id => {
            console.log(id)
            try {
                const result = await getOneNews(id)
                console.log(result)
                if (result.success) {
                    setCard(result.entity);
                    setIsLoading(false)
                } else {
                    console.log('Something went wrong')
                }
            } catch(error) {
                console.log('Request error: ')
                console.log(error)
            }
        } 
        fetchOneNews(id)
    }, [])

    if (isLoading) return <div>Is Loading...</div>

    return (
        <div className={classes.container}>
        <div className={classes.items}>
         <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={photo}
                title="Contemplative Reptile"
            />
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                </Typography>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
        <div style={{marginLeft: '30px'}}>
        <HotNews/>
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cards: state.cards.cards,
    id: state.id.id
})

const mapActionsToProps = {
    setCurrentNews,
    setCards
}

export default connect(mapStateToProps, mapActionsToProps)(CurrentNews);