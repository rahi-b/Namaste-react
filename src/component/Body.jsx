import ResuartCard from "./ResuartCard";
import resLists from "../utils/mockData";
import { useState } from "react";


const Body= () =>{
    let [ListOfRestaurant, setListOfRestaurant] =useState(resLists)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick ={()=>{
                    const filterList= ListOfRestaurant.filter(
                        (res)=> res.info.avgRating >4 );

                        setListOfRestaurant(filterList);
                }
                }>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-cardcontainer">
                {
                    ListOfRestaurant.map((restaurant=> <ResuartCard  key={restaurant.info.id} resData={restaurant}/>))
                } 
                
            </div>
        </div>
    )
}

export default Body;