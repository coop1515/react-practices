import React, { useState } from 'react';
// import styles from './assets/css/styles.css';
import './assets/scss/App.scss';
import Searchbar from './searchbar';
import Emaillist from './emaillist';
import data from './assets/json/data.json';
import RegisterForm from './registerForm';

function App() {
    const [emails, setEmails] = useState(data);
    const notifyEmaildelete = function(no){
        console.log(no);
    }
    const notifyEmailAdd = function (email) {
        console.log(email);
    }
    const notifyKeywordChanged = function(keyword){
        const result = data.filter(e => e.firstName.indexOf(keyword) !== -1 || 
            e.lastName.indexOf(keyword) !== -1 ||
            e.email.indexOf(keyword) !== -1);
            setEmails(result);
    }
    return (
        <div id={'App'}>
            <RegisterForm />
            <Searchbar callback={notifyKeywordChanged}/>                    
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;