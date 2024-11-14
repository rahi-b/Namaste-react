import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

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
            <Outlet />
        </div>
    )
}

const appRouter=createBrowserRouter([
    {path:'/',
        element:<AppLayout />,
        children:[
            {path:'/',
                element:<Body />
            },
            {path:'/about',
                element:<About />
            },
            {path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurant/:resid',
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
   
])


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);