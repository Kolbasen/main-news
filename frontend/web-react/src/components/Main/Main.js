import React from 'react';
import Cards from '../Cards/Cards'
import AddForm from '../AddForm/AddForm';

import { getCards, sendCard } from '../../helpers/apiHelpers';
import { Button } from '@material-ui/core';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addingNews: false,
            loading: true
        }
        this.submitNews = this.submitNews.bind(this);
    }

    submitNews(header, text) {
        const sendData = async () => {
            const data ={
                header,
                text
            }
            const result = await sendCard(data)
            console.log(result)
            this.setState(() => ({addingNews: false}))
        }
        sendData()
    }

    componentDidMount() {
        const fetchData = async () => {
            const result = await getCards();
            if (result.success) {
                console.log(result.entity)
                this.setState(() => ({cards: result.entity, loading: false}))
            } else {
                console.log('Something went wrong')
            }
        }
        fetchData();
    }

    render() {
        if (this.state.loading) return <h1>Loading...</h1>
        console.log(this.state.addingNews)
        return (        
            <div>
                <h1>
                    <AddForm submitNews={this.submitNews} addingNews={this.state.addingNews}/>
                    <Button onClick={() => this.setState((prevState) => ({addingNews: !prevState.addingNews}))}>
                        Add card
                    </Button>
                    <Cards cards={this.state.cards}/>
                </h1>
            </div>
        )
    }
}   

export default Main