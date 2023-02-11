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
                <img src ="src/images/fb.png"></img>
                <img src ="src/images/twit.png"></img>
                <img src ="src/images/insta.png"></img>
            </div>
        </footer>
    );
};