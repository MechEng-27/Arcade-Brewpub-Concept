import React from "react"
import "./Footer.css"

export default function Footer(){
    var currentYear = new Date().getFullYear()
    return(
        <footer id = "footer">
            <p>&#169; Retro Wave {currentYear}</p>
        </footer>
    )
}