import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";



const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] =useState(null);

    const {resId } =useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data= await fetch(MENU_URL + resId);
        const Json=await data.json();

        console.log(Json);
        setResInfo(Json.data);
    }

    if(resInfo === null ) return <Shimmer />
    const {name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;

    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(',')} - {costForTwoMessage};
            </p>
            <h3>Menu</h3>
            <ul>
                <li>Biriyani</li>
                <li>Burgers</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;