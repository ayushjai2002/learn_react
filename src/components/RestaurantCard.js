import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) =>{
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return(
        <div className="res-card">
            <img className="food-image" src={CDN_URL+cloudinaryImageId} alt=""/>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;