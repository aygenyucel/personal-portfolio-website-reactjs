import React, { useState } from 'react';

import {HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.scss';
import { useRef } from 'react';

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    
    const [toggle, setToggle] = useState(false);

    return (

        <header className='app__navbar'>
            <a href={'#home'}>
                <div className='app__navbar-logo'>
                    
                    <img src={images.logo} alt='logo' />
                    
                </div>
            </a>
            <nav ref={navRef} >
                <ul className='app__navbar-links'>
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>
                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                    <HiX onClick={() => setToggle(false)} />

                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                        ))}
                    </ul>

                    </motion.div>
                )}
            </div>
        </header>
    )
}

export default Navbar