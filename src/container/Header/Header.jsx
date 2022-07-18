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
      <motion.div
        whileInView={{ y: [120,0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app_flex'>
            {/* <span>👋</span> */}
            <div className='badge-cmp-text' >
              <p className='p-text'>Hello, I am</p>
              <h1 className='p-text'>Aygen</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Front-end Developer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ y: [-100,0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__header-links'
      >
        <div className='app__header-contact'>
          <a href='#contact'>
            <button className='app__header-button p-text-white'>Contact</button>
          </a>
          
        </div>

        <div className='app__header-resume'>
          <a href='aygenyucelcv.pdf' download= 'Aygen_Yucel_Resume.pdf'>
            <button className='app__header-button p-text-white'>Download Resume</button>
          </a>
        </div>

      </motion.div>

      <div class="custom-shape-divider-bottom-1657991521">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
          </svg>
      </div>

      
    </div>
    
      
  )
}

export default AppWrap(Header, 'home');

