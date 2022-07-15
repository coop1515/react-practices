import React from 'react';
import emails from './assets/json/data.json';

function emaillistItem({emails}) {

    return (
        <>
        {emails.map(function(email){
                return (<li>{email.firstName + email.lastName} <br/>{email.email}</li>)
            })}
        </>
            );
        }

export default emaillistItem;