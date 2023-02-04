import React from "react"
import "./NavBar.css"

export default function test() {
    return (
        <div className="nav-bar">
            <ul id = "nav-list">
                <li><a href = "#home-title" >Home</a></li>
                <li><a href = "#about-title" >About</a></li>
                <li><a href = "#menu-title" >Menu</a></li>
                <li><a href = "#games-title" >Games</a></li>
                <li><a href = "#contact-title" >Contact</a></li>
            </ul>
        </div>
    )
}