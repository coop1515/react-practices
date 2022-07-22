import React from 'react';
import styles from'./assets/css/CardList.css';
import Card from './Card';
function CardList({title, cards}) {
    // console.log(title,cards);
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
                {cards.map((card) => <Card
                    key={card.no}
                    card = {card}
                     />)
                }
        </div>
    );
}

export default CardList;