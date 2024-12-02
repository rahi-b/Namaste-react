import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
        console.log('menu fetching is work');
    },[])

    const fetchMenu = async ()=>{
        const data =await  fetch(MENU_URL + resId);
        const json= await data.json();

        setResInfo(json.data);
        console.log(json);

    }
    return resInfo;
}

export default useRestaurantMenu;