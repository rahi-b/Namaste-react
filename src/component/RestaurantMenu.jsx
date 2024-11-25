import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = ()=>{
    

    const { resId } =useParams();

    const resInfo=useRestaurantMenu(resId)

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
