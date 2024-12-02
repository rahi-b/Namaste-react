import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";


const ResuartCard= (props)=>{

    const {loggedInUser} =useContext(UserContext)
    const {resData}= props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        cuisines,
        areaName} = resData?.info;
    return ( 
        <div className="p-4 m-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="rounded-lg" 
            alt="card-image" 
            src={  CDN_URL + 
             cloudinaryImageId 
            }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <p>{avgRating} stars</p>
            <p>{resData.info.sla.deliveryTime} minutes</p>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{areaName}</h5>
            <h5> User : {loggedInUser}</h5>
            
        </div>
    ) 
}

export const withPromotodLabel =(ResuartCard)=>{
    return(props)=>{
        return(
            <div>
                <Label className="absolute p-2 m-2 bg-black text-white rounded-lg">Promoted</Label>
                <ResuartCard {...props} />
            </div>
        )
    }
}

export default ResuartCard;