import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
      

        <div className="left">
          <img src="assets/contact-clip-art.png" alt=""/>
        </div>
        <div className="right">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
          {message && <span>Thanks! I will get back to you soon!</span>}
        </div>
      
      
      
    </div>
  )
}
