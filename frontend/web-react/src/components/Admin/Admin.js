import React, { useState, useEffect } from 'react'
import AddForm from '../AddForm/AddForm'
import { sendCard, getCards } from '../../helpers/apiHelpers'

export default function Admin() {
    const [isLoading ,setIsLoading] = useState(true)
    const [cards, setCards] = useState(null)
    const [addingNews, setAddingNews] = useState(false)

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

    useEffect(() => {
        const fetchStartingData = async () => {
            const result = await getCards();
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

    return (
        <div style={{marginTop: '80px'}}>
            <button onClick={() => setAddingNews(prevState => !prevState)}>Add news</button>
            <AddForm submitNews={submitNews} addingNews={addingNews}/>
            {
                cards.map((value) => (
                    <div>
                    <div style={{display: 'flex', alignItems: 'center '}}>
                        <h2>{value.name}</h2>
                        <p>{value.text}</p>
                    </div>
                    <button>Edit news</button>
                    <button>Delete news</button>
                    </div>
                ))
            }
        </div>
    )
}