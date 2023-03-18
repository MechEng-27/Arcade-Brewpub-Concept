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
                <img src ="/images/fb.png"
                alt = "Facebook icon"></img>
                <img src ="/images/twit.png"
                alt = "Twitter icon"></img>
                <img src ="/images/insta.png"
                alt = "Instagram icon"></img>
            </div>
        </footer>
    );
};