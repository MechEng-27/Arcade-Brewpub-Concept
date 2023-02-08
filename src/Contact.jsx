import React, { useState } from "react"
import { useForm } from "react-hook-form";
import "./Contact.css"

export default function Contact() {
 
    const [submitSuccess, setSubmitSuccess] = useState("");
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const changeStatus = () => {
        setSubmitSuccess("Thank you for your feedback");
        setTimeout(() => {
            setSubmitSuccess("")
        }, 3000);
    };

    const onSubmit = (data) => {
        console.log(data)
        reset()
        changeStatus()
    }

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
                <form className = "contact-form-container" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className = "contact-form-label">Name</h4>
                    <div className ="names-container">
                        <div id = "first-name-container">
                            <input type = "text" id = "first-name" 
                            {...register("first-name")}>
                            </input>
                            <p>First name</p>
                        </div>
                        <div id = "last-name-container">
                            <input type = "text" id = "last-name" 
                            {...register("last-name")}>
                            </input>
                            <p>Last Name</p>
                        </div>
                    </div>
                    <h4 className = "contact-form-label">Email *</h4>
                    <input type = "email" id = "email" 
                    {...register("email", {required: true})}>
                    </input>
                    {errors.email?.type === 'required' && <p className = "error" role="alert">Please enter vaild email address</p>}
                    <h4 className = "contact-form-label">Message *</h4>
                    <textarea id = "message" 
                    {...register("message", {required:true})}>
                    </textarea>
                    {errors.message?.type === 'required' && <p className = "error" role="alert">Message is required</p>}
                    <input type = "submit" id ="contact-submit-button" value = "Submit"></input>
                    <p id = "submit-status">{submitSuccess}</p>
                </form>
            </div>
        </div>
    )
}