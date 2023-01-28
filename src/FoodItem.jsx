import React from "react";
import "./FoodItem.css"

export default function FoodItem(props) {
    return(
        <div className = "food-item">
            <div className = "food-container">
                <h4>{props.item}</h4>
                <h4 id = "food-price">{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <hr className = "thin-line"></hr>
        </div>
    )
}