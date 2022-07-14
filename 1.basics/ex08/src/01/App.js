import React from 'react'; //rsf 를 많이 씀.

function App() {
    return (
        <div>
            <h2>app01</h2>
            <p>JSX Tutorial - 특징1: HTML과의 차이점</p>
            {
                // i = 10 1. 속성은 Camel case
            }
            <input type="text" maxLength='10'/>
                {
                    // 2. Element는 꼭 닫는다.
                    // 오류) <br>,<hr>, <input type="text" > <img src=''>
                }
            <br/>
            <hr/>
            <img src=''/>
            {/*
                 3. 속성 이름은 DOM API와 일치한다.(HTML Tag의 속성 이름 x)
                    <h1 class='header' id='title'>타이틀</h1>
                    document.getElementById('title').className='header';
            */}
            <h4 className='header' id ='title'>타이틀</h4>
        </div>
    );

}

export default App;

// import React, { Component } from 'react'; //rcc

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 Hello World
//             </div>
//         );
//     }
// } 

// export default App; //rcc