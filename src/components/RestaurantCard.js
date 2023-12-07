import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {cardDetails} = props 
    const {name, cloudinaryImageId, avgRating, areaName, cuisines, deliveryTime} = cardDetails.card.card.info
    return (
      <div className="card-container">
        <img src = {CDN_URL +cloudinaryImageId} 
        alt = "rest-logo"
        className="rest-image" 
        />
        <h3>{name}</h3>
        <h4>{avgRating} Rating</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{deliveryTime}</h4>
        <h5>{areaName}</h5>
      </div>
    )
  }

  export default RestaurantCard