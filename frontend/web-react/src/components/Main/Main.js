import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards'
import AddForm from '../AddForm/AddForm';

import useInfiniteScroll from '../../helpers/useInfiniteScrollHelper'
import { getTenCards, sendCard } from '../../helpers/apiHelpers';
import { Button } from '@material-ui/core';

function Main()  {
    const [loading, setLoading] = useState(true);
    const [addingNews, setAddingNews] = useState(false)
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const [cards, setCards] = useState(null);

    const submitNews = (header, text) => {
        const sendData = async () => {
            const data ={
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
                setCards((prevState) => prevState.concat(result.entity));
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
                setLoading(false)
            } else {
                console.log('Something went wrong')
            }
        }
        fetchStartingData();
    }, []) 

    

    if (loading) return <h1>Loading...</h1>
    console.log(isFetching)
    return (        
        <div>
            <h1>
                <AddForm submitNews={submitNews} addingNews={addingNews}/>
                    <Button onClick={() => setAddingNews((prevState) => !prevState)}>
                        Add card
                    </Button>
                <Cards cards={cards}/>
            </h1>
            {isFetching && 'Loading more news'}
        </div>
    )
}

export default Main