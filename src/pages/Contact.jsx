import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="contact">
      <header>
        <h1 className='contact-h1'>Contact Me</h1>
        <p className='contact-p'>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      <form action="">
        <div className='flex-div'>
          <div>
            <label htmlFor="first_name">First name</label>
            <input type="text" name="" id="first_name" placeholder='Enter your first name' required/>
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input type="text" name="" id="last_name" placeholder='Enter your last name' required/>
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='yourname@email.com' required/>
        <label htmlFor="message">Message</label>
        <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required/>
        <div className='accept'><input type="checkbox" name="" id="" required /> <span>You agree to providing your data to Zuri who may contact you.</span></div>
        <input type="submit" value="send message" id='btn__submit' />
      </form>

      <Footer />
    </div>

    

  )
}

export default Contact