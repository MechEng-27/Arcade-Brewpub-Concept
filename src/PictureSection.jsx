import React from "react";
import "./PictureSection.css";

export default function PictureSection(){
    const [pictureIndex, setPictureIndex] = React.useState(1);

    const setIndex = (index) => {
        setPictureIndex(index);
    };

    return(
        <section className = "picture-section">
                <div className = "picture-container">
                    <img src = "/images/Arcade.jpg" className = {pictureIndex === 1?
                    "active-picture" : "inactive-picture"}
                    alt = "Picture of arcade">
                    </img>
                    <img src = "/images/Beer.jpg" className = {pictureIndex === 2?
                    "active-picture" : "inactive-picture"}
                    alt = "Picture of beer being poured">
                    </img>
                    <img src = "/images/Chicken.jpg" className = {pictureIndex === 3?
                    "active-picture" : "inactive-picture"}
                    alt = "Picture of brewery food">
                    </img>
                </div>
                <div className = "container">
                    <div className = "circle-buttons">
                        <input type = "button" className = {pictureIndex === 1? 
                        "active-round-button": "round-button"}
                        onClick = {() => setIndex(1)}>
                        </input>
                        <input type = "button" className = {pictureIndex === 2? 
                        "active-round-button": "round-button"}
                        onClick = {() => setIndex(2)}>
                        </input>
                        <input type = "button" className = {pictureIndex === 3? 
                        "active-round-button": "round-button"}
                        onClick = {() => setIndex(3)}>
                        </input>
                    </div>
                </div>
        </section>
    );
};