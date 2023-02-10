import React from "react";
import "./BeerItem.css";

export default function BeerItem(props) {
    return(
        <div className = "beer-item">
            <div className = "beer-container">
                <h4>{props.item}</h4>
                <h4 className = "beer-price">{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <p className = "beer-stats">{props.stats}</p>
            <hr className = "menu-thin-line"></hr>
        </div>
    );
};