import React from "react"
import "./About.css"

export default function About(){
    return(
        <section className = "about">
            <div className = "container">
                <hr className ="solid"></hr>
                <h2 className = "section-title" id = "about-title">About</h2>
                <div className = "about-container">
                    <div id = "about-picture-container">
                    <img src ="src/images/Pinball.jpg" id= "about-picture"></img>
                    </div>
                    <div className = "about-section-text">
                        <p>
                            Retro Wave is a retro gaming themed Brewpub featuring more than 60 arcade games,
                            20 pinball machines and three classic skee-ball alleys all cost only 25 cents
                            per play. Additionally, there are numerous previous generation home consoles
                            on free play!
                        </p>
                        <p>
                            Our beer menu features a wide variety of beer styles that are brewed on site in 
                            our 1bbl brewing system. We also have a full kitchen serving up your favorite pub foods.
                        </p>
                    </div>
                </div>
                <div className = "information-container">
                    <div id = "hours-container">
                        <h3 className = "info-container-heading">Hours</h3>
                        <p>Monday-Friday: 12:00 p.m. - 11:00 p.m.</p>
                        <p>Saturday: 11:00 a.m. - 2:00 a.m.</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div id = "contact-container">
                        <h3 className = "info-container-heading">Contact</h3>
                        <p>Phone: 414-555-0100 </p>
                        <p>
                            Have a question? send us a <a href = "#contact-title" 
                            style = {{color: "#00ccff"}}>message</a>
                        </p>
                    </div>
                    <div id = "address-container">
                        <h3 className = "info-container-heading">Address</h3>
                        <p>64 Nintendo Avenue</p>
                        <p>Milwaukee, Wisconsin 53202</p>
                    </div>
                </div>
            </div>
        </section>
    );
};