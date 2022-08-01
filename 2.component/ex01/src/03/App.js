import React, { useState } from 'react';
import FoodList from './FoodList';
import {createClient} from 'redis';

function App() {

const [data, setData] = useState([]);    

(async () => {

  const client = createClient({
    url: `redis://192.168.10.10:6379`,
  });

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('testroom02', (message) => {
    console.log(message);
    setData([...data, message]);
  });

})();
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
            {data}
                <FoodList
                    foods={foods} />
            </div>
    );
}

export default App;