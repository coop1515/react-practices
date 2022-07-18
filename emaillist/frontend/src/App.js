import React from 'react';
// import styles from './assets/css/styles.css';
import './assets/scss/App.scss';
import Searchbar from './searchbar';
import Emaillist from './emaillist';
import emails from './assets/json/data.json';

function App() {

    return (
        <div id={'App'}>
            <Searchbar />                    
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;