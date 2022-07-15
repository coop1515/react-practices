import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    render() {
        // const foods = [{name:'', q:10}, {},{},{}];
        return (
            <div>
                <ul>
                    <FoodListItem name='Bread' quantity='5'/>
                    <FoodListItem name='Milk' quantity='10'/>
                    <li>Egg: 20</li>
                </ul>
            </div>
        );
    }
}

export default FoodList;