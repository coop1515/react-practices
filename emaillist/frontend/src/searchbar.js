import React from 'react';
import styles from './assets/scss/Searchbar.scss';

function searchbar() {
    return (
        <div id = {styles.Searchbar}>
        찾기: <input type='text' placeholder='search'/>
        </div>
    );
}

export default searchbar;