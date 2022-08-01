import React, { Component } from 'react';
import FoodList from './FoodList';
import {createClient} from 'redis';
import 'url';

class App extends Component {
    constructor(props) {
        super(props);

        this.subscriber = createClient({
            url: 'redis://192.168.10.10:6379'
        })
        .duplicate();

        (async () => {
            await subscriber.connect();
            await subscriber.subscribe('testroom02', (message) => {
              console.log(message);
            });
        })();
    }

    
    render() {
 
        return (
            <div id='App'>
                <FoodList
                    foods={this.foods} />
            </div>
        );
    }
}

export default App;