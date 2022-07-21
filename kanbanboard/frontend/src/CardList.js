import React from 'react';
import './assets/css/CardList.css';

function CardList({title, cards}) {
    console.log(title,cards);
    return (
        <div className={'CardList'}>
            <h1>{title}</h1>
        </div>
    );
}

export default CardList;