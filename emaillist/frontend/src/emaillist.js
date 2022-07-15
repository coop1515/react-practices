import React from 'react';
import styles from './assets/css/styles.css';
import EmaillistItem from './emaillistItem';

function emaillist({emails}) {
    return (
        // <ul>
        // {emails.map(function(email){
        //         return (<li>{email.firstName + email.lastName} <br/>{email.email}</li>)
                
        //     })}
        // </ul>
        <ul className={styles.Emaillist}>
           <EmaillistItem emails={emails} />    
        </ul>
    );
}

export default emaillist;