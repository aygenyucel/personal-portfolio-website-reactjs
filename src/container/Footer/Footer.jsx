import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


function Footer() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
    
      <h2 className='head-text'>CONTACT ME!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:aygenyucel@outlook.com" className='p-text-dark'>aygenyucel@outlook.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://linkedin.com/in/aygenyucel" target='_blank' className='p-text-dark'>Contact me on LinkedIn</a>
        </div>
      </div>

    {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text-dark' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />          
        </div>
        <div className='app__flex'>
          <input className='p-text-dark' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />          
        </div>
        <div className=''>
          <textarea 
            className='p-text-dark' 
            placeholder='Your Message' 
            name='message'
            value={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='app__footer-button p-text-dark' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='p-text-dark'>Thank you for getting in touch!</h3>
      </div> }

    </>
  )
}

export default AppWrap (
  MotionWrap (Footer, 'app__footer'),
  'contact',
  'app__lightbluebg'
)