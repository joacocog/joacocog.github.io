import "./FormStyles.css";

import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Form = () => {


  const [formState, setFormState]= useState({});

  const changeHandler = (event)=>{
    setFormState({...formState, [event.target.name]: event.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      toast.error('You have to complete all the fields', {
        autoClose: 2000,
      });
      return;
    }
  
    const config = {
      SecureToken: "6a96af93-205c-479c-b3ee-15a014091923",
      To: 'joacocog@icloud.com',
      From: formState.email,
      Subject: formState.subject,
      Body: `Hi my name is ${formState.name}  ${formState.message}`,
    };
  
    if (window.Email) {
      window.Email.send(config)
        .then(() => {
          toast.success('Your email was sent successfully!', {
            autoClose: 2000,
          });
          setFormState({});
        })
        .catch((error) => {
          toast.error('There was an error sending the email', {
            autoClose: 2000,
          });
        });
    }
  }  

  

  return (
    <div className="form" onSubmit={submitHandler} id="contact">
        <h1>Get in touch!</h1>
        <form className="form-contact">
            <label>Your Name</label>
            <input name="name" type="text" placeholder='Enter your name' value={formState.name || ''} onChange={changeHandler}></input>
            <label>Email</label>
            <input name="email" type="email" placeholder='Enter your email' value={formState.email || ''} onChange={changeHandler}></input>
            <label>Subject</label>
            <input name="subject" type="text" placeholder='What is about?' value={formState.subject || ''} onChange={changeHandler}></input>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Write here your message" value={formState.message || ''} onChange={changeHandler}></textarea>
            <input type="submit" className="btn" value={"Send"}></input>
        </form>

        <ToastContainer position="bottom-right" />
    </div>
  )
  
}

export default Form