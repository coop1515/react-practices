import React, { Component } from 'react';

class FoodListItem extends Component {
    render() {
        return (
                // <li>Bread: 100</li>
                <li>{this.props.name}: {this.props.quantity}</li>
        );
    }
}

export default FoodListItem;