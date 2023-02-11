import React from "react";
import "./Footer.css";

export default function Footer(){
    var currentYear = new Date().getFullYear()
    return(
        <footer id = "footer">
            <div id = "copyright">
                <p>&#169; Retro Wave {currentYear}</p>
            </div>
            <div className = "social-icons">
                <img src ="/images/fb.png"></img>
                <img src ="/images/twit.png"></img>
                <img src ="/images/insta.png"></img>
            </div>
        </footer>
    );
};