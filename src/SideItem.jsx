import React from "react"
import "./SideItem.css"

export default function SideItem(props){
    return(
        <div className = "side-item">
            <div className = "side-container">
                <h4>{props.item}</h4>
                <h4 id = "side-price">{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <hr className = "thin-line"></hr>
        </div>
    )
}
