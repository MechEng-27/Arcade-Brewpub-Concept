import React from "react"
import "./Contact.css"

export default function Contact() {
    return(
        <div className = "container">
            <h2 className = "section-title" id = "contact-title">
                Contact Retro Wave</h2>
            <hr className = "thin-line"></hr>
            <div className = "contact-main-container">
                <div className = "feedback-questions">
                    <p>What games do you want us to get?</p>
                    <p>What is your favorite beer style?</p>
                    <p>We are listening!!!</p>
                </div>
                <div className = "contact-form-container">
                    <h4 className = "contact-form-label">Name</h4>
                    <div className ="names-container">
                        <div id = "first-name-container">
                            <input type = "text" id = "first-name"></input>
                            <p>First name</p>
                        </div>
                        <div id = "last-name-container">
                            <input type = "text" id = "last-name"></input>
                            <p>Last Name</p>
                        </div>
                    </div>
                    <h4 className = "contact-form-label">Email *</h4>
                    <input type = "email" id = "email"></input>
                    <h4 className = "contact-form-label">Message *</h4>
                    <textarea id = "message"></textarea>
                    <input type = "button" id ="contact-submit-button" value = "Submit"></input>
                </div>
            </div>
        </div>
    )
}