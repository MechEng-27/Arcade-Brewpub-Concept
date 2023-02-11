import React from "react";
import "./MenuItem.css";

export default function MenuItem(props) {
    return(
        <div className = "menu-item">
            <div className = "item-container">
                <h4>{props.item}</h4>
                <h4 id = "item-price">{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <hr className = "menu-thin-line"></hr>
        </div>
    );
};