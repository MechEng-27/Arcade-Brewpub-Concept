import React from "react";
import "./Home.css";

export default function Home(){
    return(
        <section id = "home">
            <img id ="home-picture" src ="/images/Nintendo.jpg" ></img>
            <div className = "name-container">
                <h1 id = "home-title">Retro Wave</h1>
                <p>The only arcade themed brewpub in Milwaukee</p>
            </div>
        </section>

    );
};