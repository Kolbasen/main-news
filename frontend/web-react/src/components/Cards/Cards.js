import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import AddForm from '../AddForm/AddForm'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import useStyles from './style'
import photo from '../../static/nature.jpg'
import { getTenCards, sendCard } from '../../helpers/apiHelpers'
import useInfiniteScroll from '../../helpers/useInfiniteScrollHelper'



function Cards(props) {
    const { cards, setCards, setCurrentNews } = props;
    const history = useHistory()
    const classes = useStyles();
    const [redirect, setRedirect] = useState({flag: false, endpoint: ''})
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const [isLoading, setIsLoading] = useState(true);
    const [addingNews, setAddingNews] = useState(false);

    const submitNews = (header, tags, text) => {
        const sendData = async () => {
            const data = {
                header,
                tags,
                text
            }
            const result = await sendCard(data)
            console.log(result)
            setAddingNews(false)
        }
        sendData()
    }

    function fetchMoreListItems() {
          const fetchingMoreCards = async () => {
            const result = await getTenCards();
            if (result.success) {
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
    console.log(redirect.endpoint)
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
                    console.log(value.id)
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

export default Cards