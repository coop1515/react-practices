import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
function App() {
    return (
        <div style={{color: 'red'}}>
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <FontAwesomeIcon icon={faTimesCircle}/>

        </div>
    );
}

export default App; 