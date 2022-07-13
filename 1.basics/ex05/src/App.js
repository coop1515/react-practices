import React from 'react';

function App() {
    // const App = document.createElement('div');
    // App.textContent = "Hello World";

    const App = React.createElement('div', null, 'Hello World'); // null부분은 자식
    return App;
}

export {App}