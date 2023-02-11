import React from "react"
import "./About.css"

export default function About(){
    return(
        <section className = "about">
            <div className = "container">
                <hr className ="solid"></hr>
                <h2 className = "section-title" id = "about-title">About</h2>
                <hr className= "thin-line"></hr>
                <div className = "about-container">
                    <div id = "about-picture-container">
                        <img src ="/images/Pinball.jpg"></img>
                    </div>
                    <div id = "about-section-text">
                        <p>
                            Retro Wave is a retro gaming themed brewpub featuring 40+ arcade games, 10+ pinball machines
                            and retro console gaming. All arcade games and pinball machines cost only 25 cents to play
                            while retro consoles are on free play. 
                        </p>
                        <p>
                            We also brew a wide variety of craft beer including classic and modern styles on our 1 bbl 
                            brewing system. Retro Wave also has a full kitchen serving up all of your favorite pub foods.
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
                            Have a question? Send us a <a href = "#contact-title" 
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