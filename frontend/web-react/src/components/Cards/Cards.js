import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import AddForm from '../AddForm/AddForm'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import useStyles from './style'
import photo from '../../static/nature.jpg'
import { setCurrentNews } from '../../store/currentNews/actions'
import { setCards } from '../../store/cards/actions'
import { getTenCards, sendCard } from '../../helpers/apiHelpers'
import useInfiniteScroll from '../../helpers/useInfiniteScrollHelper'



function Cards(props) {
    const history = useHistory()
    const classes = useStyles();
    const { cards, setCurrentNews, setCards } = props;
    const [redirect, setRedirect] = useState({flag: false, endpoint: ''})
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const [isLoading, setIsLoading] = useState(true);
    const [addingNews, setAddingNews] = useState(false);

    const submitNews = (header, text) => {
        const sendData = async () => {
            const data = {
                header,
                text
            }
            const result = await sendCard(data)
            console.log(result)
            setAddingNews(false)
        }
        sendData()
    }

    function fetchMoreListItems() {
        console.log(1)
          const fetchingMoreCards = async () => {
            const result = await getTenCards();
            if (result.success) {
                console.log(result.entity)
                console.log(cards)
                const newCards = cards.concat(result.entity)
                setCards(newCards)
                setIsFetching(false)
            } else {
                console.log('Something went wrong')
            }
          }
          fetchingMoreCards();
    }

    useEffect(() => {
        const fetchStartingData = async () => {
            const result = await getTenCards();
            if (result.success) {
                console.log(result.entity)
                setCards(result.entity);
                setIsLoading(false)
            } else {
                console.log('Something went wrong')
            }
        }
        fetchStartingData();
    }, []) 

    if (isLoading) return <h1>Is Loading...</h1>

    if (redirect.flag) return <Redirect to={`/news/${redirect.endpoint}`}/>
    console.log(cards)
    return(
        <div style={{marginTop: '80px'}}>
            <AddForm submitNews={submitNews} addingNews={addingNews}/>
                <Button onClick={() => setAddingNews((prevState) => !prevState)}>
                    Add card
            </Button>
        {cards.map((value, id) => (
            <div key={id} className={classes.items}>
         <Card className={classes.card}>
             <CardActionArea onClick={() => {
                    setCurrentNews(value.id)
                    setRedirect({flag: true, endpoint: value.id}); 
                    history.push('/')
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
        ))}
        {isFetching ? 'Fetching more cards' : null}
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
    cards: state.cards.cards,
    id: state.id.id
}}

const mapActionsToProps = {
    setCurrentNews,
    setCards
}

export default connect(mapStateToProps, mapActionsToProps)(Cards);