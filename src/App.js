import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { lazy,Suspense } from "react";
import UserContext from "./utils/userContext";

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
const Grocery = lazy(()=> import("./component/Grocery"));

const AppLayout= ()=>{

    const [userName,setUserName] = useState();

    useEffect(()=>{
        const data ={
            name:"Abdul rahib",
        };

        setUserName(data.name);

    },[])

    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
           
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
            {path:'/grocery',
                element: <Suspense fallback={<h1>Loading.....</h1>}> <Grocery /></Suspense>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
   
])


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);