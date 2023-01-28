import React from "react"
import NavBar from "./NavBar"
import "./Home.css"

export default function Home(){
    return(
        <div className = "home">
            <NavBar />
            <div className = "name-container">
                <h1>Retro Wave</h1>
                <p>The only arcade themed brewpub in Milwaukee</p>
            </div>
        </div>
    )
}