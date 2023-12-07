import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import cards from "../utils/mockData"


const Body = () => {
    const [restCards, setRestCards] = useState(cards)
    
    return(
        <div className="body-container">
            <div className="filter">
                <button className="" type = "button" onClick={() => (
                    setRestCards(() => restCards.filter((each) => each.card.card.info.avgRating > 4.0))
                )}>Top Rated Restaurants</button>
            </div>
            <div className="body-container">
            {restCards.map((each) => (
                <RestaurantCard cardDetails = {each} key ={each.id} />
            ))}
            </div>
        </div>
    )
}

export default Body