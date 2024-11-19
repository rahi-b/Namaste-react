import ResuartCard from "./ResuartCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body= () =>{
    let [listOfRestaurants, setListOfRestaurant] =useState([]);
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);

    let [searchText,setSearchText] =useState("");

    console.log('Body rendered')

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const jsonData= await data.json();

        console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );

        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus =useOnlineStatus();

    if(onlineStatus ===false){
        return (
            <h1>You are in offline : please check your internet connection</h1>
        )
    }

    return listOfRestaurants === 0 ? (<Shimmer /> ): 
    (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-inp"  
                    value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" 
                    onClick={()=>{
                        console.log(searchText)
                        const filteredListRestaurant = listOfRestaurants.filter((res)=>{
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurant(filteredListRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick ={()=>{
                    const filterList= listOfRestaurants.filter(
                        (res)=> res.info.avgRating >4.5 );
                        setFilteredRestaurant(filterList);
                }
                }>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-cardcontainer">
                {
                    filteredRestaurant.map((restaurant) => 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > <ResuartCard  resData={restaurant} /> </Link>)
                } 
                
            </div>
        </div>
    )
}
export default Body;