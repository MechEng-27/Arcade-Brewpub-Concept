import React from "react"
import NavBar from "./NavBar"
import "./Home.css"

export default function Home(){
    return(
        <div className = "home">
            <img id ="home-picture" src ="src/images/Nintendo.jpg" ></img>
            <div className = "name-container">
                <h1>Retro Wave</h1>
                <p>The only arcade themed brewpub in Milwaukee</p>
            </div>
        </div>

    )
}