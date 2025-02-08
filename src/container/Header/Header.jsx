import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {

  return (
  
    <div className='app__header app__flex'>

      
      <div className='app__header-badge'>
        <div className='badge-cmp app_flex'>
          <div className='badge-cmp-text' >
              <p className='p-text-light'>Hello, I am</p>
              <h1 className='p-text-light'>Aygen Yucel</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text-light'>Full Stack Web Developer</p>
        </div>
      </div>


      <motion.div
        whileInView={{ y: [-100], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__header-links'
      >
      
        <div className='app__header-contact'>
          <a href='#contact'>
            <button className='app__header-button p-text-light'>Contact</button>
          </a>
        </div>
      </motion.div>
      
      

      
      
    </div>

  )
}
export default AppWrap(Header, 'home');

