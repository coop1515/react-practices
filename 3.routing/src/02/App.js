import React, { useState, useEffect } from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({ page: '/' });

    const handleLinkClick = (e) => {
        e.preventDefault();
        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(url);

        window.history.pushState({ page: url }, e.target.text, url);
        setRoute({ page: url });
    }

    // const router = function () {
    //     let component = null;
    //     switch (route.page) {
    //         case '/':
    //             component = <Main/>;
    //             break;
    //         case '/gallery':
    //             component = <Gallery/>;
    //             break;
    //         case '/guestbook':
    //             component = <Guestbook/>;
    //             break;
    //     }

    //     return component;
    // };

    useEffect(() => {
        const handlePopState = (e) => setRoute(e.state);
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        }
    }, []);

    return (
        <div>
            {
                (() => {
                    switch (route.page) {
                        case '/':
                            return <Main />;

                        case '/gallery':
                            return <Gallery />;

                        case '/guestbook':
                            return <Guestbook />;

                        default:
                            return null;
                    }
                    // return component;
                })()
            }
            <div>
                <ul>
                    <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                    <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                    <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
                </ul>
            </div>
        </div>
    )
}