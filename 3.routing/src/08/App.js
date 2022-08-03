import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Routes, Route} from 'react-router';
import {useRoutes} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";
import About from "./component/about/About";
import Me from "./component/about/Me"
import Location from "./component/about/Location"
import Error404 from './component/error/Error404';
import './assets/scss/App.scss'
import SiteLayout from './layout/SiteLayout';

export default function App() {
    // return (
    //     <Router>
    //         <Routes>
    //             <Route path='/' element={<Main />}/>
    //             <Route path='gallery' element={<Gallery />}/>
    //             <Route path='guestbook' element={<Guestbook />}/>
    //             <Route path='user/join' element={<Join />}/>
    //             <Route path='user/login' element={<Login />}/>
    //             <Route path='user/settings' element={<Settings />}/>
    //             <Route element={<About />}>
    //                 <Route path="about/me" element={<Me />} />
    //                 <Route path="about/location" element={<Location />} />
    //             </Route>
    //             <Route path='*' element={<Error404 />} />
    //         </Routes>
    //     </Router>
    // );
    return useRoutes([
        {path:'/', element: <Main />},
        {path:'gallery', element:<Gallery />},
        {path:'guestbook', element:<Guestbook />},
        {path:'user/join', element:<Join />},
        {path:'user/login', element:<Login />},
        {path:'user/settings', element:<Settings />},
        {
            element: <About />,
            children: [
                {path:"about/me", element:<Me />},
                {path:"about/location", element:<Location />}
            ]
            
          
        },
        {path:'*', element: <Error404 />}
        
    ]);
}