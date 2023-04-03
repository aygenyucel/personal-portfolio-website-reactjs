import React from 'react';
import { BsTwitter, BsGithub, BsStackOverflow} from 'react-icons/bs';
import { ImStackoverflow} from 'react-icons/im';



import { FaLinkedinIn } from 'react-icons/fa';


function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/aygenyucel/" target='_blank'><FaLinkedinIn /></a>
          
        </div>
        <div>
          <a href="https://github.com/aygenyucel" target='_blank'><BsGithub /></a>
            
        </div>
        <div>
            <a href="https://stackoverflow.com/users/19501613/aygen-yucel" target='_blank'><ImStackoverflow /></a>
        </div>
    </div>
  )
}

export default SocialMedia