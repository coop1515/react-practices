import React from 'react';

function App() {
    
    // const App = React.createElement('div', null, 'Hello World'); // null부분은 자식
    // return App;
    return(
        <div>
            Hello World
            <div>
                World Hello
                <div>
                    HaHaHa
                    <div>
                        Hello
                        <div>
                            GoodBye
                            <div>
                                 World Hello
                                <div>
                                    HaHaHa
                                    <div>
                                        Hello
                                        <div>
                                            GoodBye
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {App}