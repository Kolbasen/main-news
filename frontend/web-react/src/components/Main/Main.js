import React from 'react';
import Cards from '../Cards/Cards'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (        
            <div>
                <h1>
                    <Cards/>
                </h1>
            </div>
        )
    }
}   

export default Main