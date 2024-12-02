import ResuartCard , {withPromotodLabel} from "./ResuartCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body= () =>{
    let [listOfRestaurants, setListOfRestaurant] =useState([]);
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);

    let [searchText,setSearchText] =useState("");

    const RestaurantCardPromoted =withPromotodLabel(ResuartCard);

    console.log('Body rendered',listOfRestaurants)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const jsonData= await data.json();

        console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );

        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus =useOnlineStatus();

    const {setUserName, loggedInUser} =useContext(UserContext)

    if(onlineStatus ===false){
        return (
            <h1>You are in offline : please check your internet connection</h1>
        )
    }

    return listOfRestaurants === 0 ? (<Shimmer /> ): 
    (
        <div className="body">
            <div className="filter flex">
                <div className="Search m-4 p-4">
                    <input type="text" className="border border-solid border-black"  
                    value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={()=>{
                        console.log(searchText)
                        const filteredListRestaurant = listOfRestaurants.filter((res)=>{
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurant(filteredListRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick ={()=>{
                    const filterList= listOfRestaurants.filter(
                        (res)=> res.info.avgRating >4.4 );
                        setFilteredRestaurant(filterList);
                }
                }>
                    Top Rated Restaurant
                </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <input className=" border border-black"
                    value={loggedInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                </div>
               
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                        {
                            restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />):
                            <ResuartCard  resData={restaurant} /> 
                    } </Link>)
                } 
                
            </div>
        </div>
    )
}
export default Body;