import { useState } from "react";
import CategoryItems from "./CategoryItem";

const RestaurantCategory = ({data,showItems,setShowIndex,dummy})=>{
    console.log(data);

    const handleClick =()=>{

        setShowIndex();
    }
    return(
        <div>
            <div className="shadow-lg w-6/12 mx-auto my-6 bg-gray-50">
        {/* header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-l">{data.title} ({data.itemCards.length})</span>
                <span className="text-2xl font-bold">⬇️</span>
            </div>

            { showItems && <CategoryItems  items={data.itemCards} dummy={dummy}/>}
            
              
            </div>
        </div>
    )
}

export default RestaurantCategory;