import ResuartCard from "./ResuartCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

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
        console.log(jsonData);
        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.gridElements?.infoWithStyle?.restaurants)
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
                        (res)=> res.info.avgRating >4 );
                        setListOfRestaurant(filterList);
                }
                }>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-cardcontainer">
                {
                    filteredRestaurant?.map((restaurant) => <ResuartCard key={restaurant.info.id} resData={restaurant} />)
                } 
                
            </div>
        </div>
    )
}
export default Body;