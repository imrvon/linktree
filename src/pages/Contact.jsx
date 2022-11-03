import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <form action="">
        <div  className='flex-div'>
          <div>
            <label htmlFor="">First name</label>
            <input type="text" name="" id="first_name" placeholder='Enter your first name'/>
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" name="" id="last_name" placeholder='Enter your last name'/>
          </div>
        </div>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="email" placeholder='yourname@email.com'/>
        <label htmlFor="">Message</label>
        <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." />
        <input type="checkbox" name="" id="" /> <span>You agree to providing your data to Zuri who may contact you.</span>
        <input type="submit" value="send message" />
      </form>

      <Footer />
    </div>

    

  )
}

export default Contact