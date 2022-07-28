import React, { useEffect, useState } from 'react';
// import styles from './assets/css/styles.css';
import './assets/scss/App.scss';
import Searchbar from './searchbar';
import Emaillist from './emaillist';
// import data from './assets/json/data.json'
import RegisterForm from './registerForm';


function App() {
    // const [emails, setEmails] = useState(data);
    const [emails, setEmails] = useState([]);
    const notifyEmaildelete = function(no){
        console.log(no);
    }
    const notifyEmailAdd = async function (email) {
        // console.log(email);
            try{
            const response = await fetch('/api',{
                method: 'post',
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails([json.data, ...emails]);

            } catch(err){
                console.log(err);
            }
    }
    const notifyKeywordChanged = async function(keyword){
        // const result = data.filter(e => e.firstName.indexOf(keyword) !== -1 || 
        //     e.lastName.indexOf(keyword) !== -1 ||
        //     e.email.indexOf(keyword) !== -1);
        //     setEmails(result);
        // const fetchData =  async () => {
            try{
            const response = await fetch(`/api?kw=${keyword}`,{
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            // console.log(json);
            setEmails(json.data);

            } catch(err){
                console.log(err);
            }
        // };
        // fetchData();
    }

    useEffect(() => {
        const fetchData =  async () => {
            try{
            const response = await fetch('/api',{
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            // console.log(json);
            setEmails(json.data);

            } catch(err){
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div id={'App'}>
            <RegisterForm callback={notifyEmailAdd} />
            <Searchbar callback={notifyKeywordChanged}/>                    
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;