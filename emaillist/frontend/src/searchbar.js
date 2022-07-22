import React from 'react';
import styles from './assets/scss/Searchbar.scss';

function searchbar({callback}) {
    return (
        <div id = {styles.Searchbar}>
        찾기: 
        <input
            type='text' 
            placeholder='search'
            onChange={e => {
                callback(e.target.value);
            }}/>
        </div>
    );
}

export default searchbar;