import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

export default function Contact() {
 
    const [submitSuccess, setSubmitSuccess] = useState("");
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const changeStatus = () => {
        setSubmitSuccess("Thank you for your feedback!!!");
        setTimeout(() => {
            setSubmitSuccess("")
        }, 3000);
    };

    const onSubmit = (data) => {
        console.log(data);
        reset();
        changeStatus();
    };

    return(
        <section id = "contact">
            <div className = "container">
                <h2 className = "section-title">Contact Retro Wave</h2>
                <hr className = "thin-line"></hr>
                <div className = "contact-main-container">
                    <div id = "feedback-questions">
                        <p>What games do you want us to get?</p>
                        <p>What is your favorite beer style?</p>
                        <p>We are listening!!!</p>
                    </div>
                    <form className = "contact-form-container" onSubmit={handleSubmit(onSubmit)}>
                        <div className ="names-container">
                            <div id = "first-name-container">
                                <label htmlFor ="first-name">
                                    <h4 className = "contact-form-name-label">First Name</h4>
                                </label>
                                <input type = "text" id = "first-name" 
                                {...register("first-name")}>
                                </input>
                            </div>
                            <div id = "last-name-container">
                                <label htmlFor = "last-name">
                                    <h4 className = "contact-form-name-label">Last Name</h4>
                                </label>
                                <input type = "text" id = "last-name" 
                                {...register("last-name")}>
                                </input>
                            </div>
                        </div>
                        <label htmlFor = "email">
                            <h4 className = "contact-form-label">Email *</h4>
                        </label>
                        <input type = "email" id = "email" 
                        {...register("email", {required: true})}>
                        </input>
                        {errors.email?.type === 'required' && <p className = "error" role="alert">
                            Please enter vaild email address
                            </p>}
                        <label htmlFor = "message">
                            <h4 className = "contact-form-label">Message *</h4>
                        </label>
                        <textarea id = "message" 
                        {...register("message", {required:true})}>
                        </textarea>
                        {errors.message?.type === 'required' && <p className = "error" role="alert">
                            Message is required
                            </p>}
                        <input type = "submit" id ="contact-submit-button" value = "Submit"></input>
                        <p id = "submit-status">{submitSuccess}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};