import React from "react";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul id = "nav-list">
                <li><a href = "#home" >Home</a></li>
                <li><a href = "#about" >About</a></li>
                <li><a href = "#menu" >Menu</a></li>
                <li><a href = "#games" >Games</a></li>
                <li><a href = "#contact" >Contact</a></li>
            </ul>
        </nav>
    );
};