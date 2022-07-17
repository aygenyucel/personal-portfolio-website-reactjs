import React from 'react';
import { BsTwitter, BsGithub} from 'react-icons/bs';

import { FaLinkedinIn } from 'react-icons/fa';


function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/aygenyucel/" target='_blank'><FaLinkedinIn /></a>
          
        </div>
        <div>
            <a href="https://twitter.com/yucelaygen" target='_blank'><BsTwitter /></a>
        </div>
        <div>
          <a href="https://github.com/aygenyucel" target='_blank'><BsGithub /></a>
            
        </div>
    </div>
  )
}

export default SocialMedia