import React from 'react';
import FoodList from './FoodList';

function App() {

    const foods = [{
        no: 1,
        name: 'Egg',
        quantity: 30
    },{
        no: 2,
        name: 'Milk',
        quantity: 5
    },{
        no: 3,
        name: 'Bread',
        quantity: 10
    }];
    
    
    return (
        <div id='App'>
                <FoodList
                    foods={foods} />
            </div>
    );
}

export default App;