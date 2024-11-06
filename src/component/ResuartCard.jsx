import { CDN_URL } from "../utils/constants";

const ResuartCard= (props)=>{
    const {resData}= props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        cuisines,
        areaName} = resData?.info;
    return ( 
        <div className="card">
            <img className="card-image" 
            alt="card-image" 
            src={  CDN_URL + 
             cloudinaryImageId 
            }/>
            <h3>{name}</h3>
            <p>{avgRating} stars</p>
            <p>{resData.info.sla.deliveryTime} minutes</p>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{areaName}</h5>
            
        </div>
    )
}

export default ResuartCard;