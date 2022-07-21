import React from 'react';
import cards from './assets/json/data.json';
import CardList from './CardList';
import KabanBoard from './assets/css/KanbanBoard.css';

function KanbanBoard() {
    

    return (
        <div className={KabanBoard.KanbanBoard}>
            <CardList title= {'ToDo'} cards = {cards.filter(e => e.status === 'ToDo')} />
            <CardList title= {'Doing'} cards = {cards.filter(e => e.status === 'Doing')} />
            <CardList title= {'Done'} cards = {cards.filter(e => e.status === 'Done')} />
        </div>
    );
}

export default KanbanBoard;