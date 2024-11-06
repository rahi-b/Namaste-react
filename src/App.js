import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Body from "./component/Body";

/**
 * -Header
 *  -logo
 *  -nav-items
 * -Body
 *  -Search
 *  -Reastuarant card container
 *  reastuarant card
 * -Footer
 *  -copyright
 *  -Address
 *  -links
 *  -Other details
 */







const AppLayout= ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);