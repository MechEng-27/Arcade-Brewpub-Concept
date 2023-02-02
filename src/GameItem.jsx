import React from "react"
import "./GameItem.css"

export default function GameItem(props){
    return(
        <ol className = "game-item">
            <li>{props.name}</li>
        </ol>
    )
}