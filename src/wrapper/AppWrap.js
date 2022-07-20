import { color } from '@mui/system';
import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
// import { useLocation } from 'react-router-dom';

// const location = useLocation();
// const { pathname } = location;


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app__flex'>
            <Component />

            <div className='copyright'>
                <p className='p-text'>@2022 AYGEN</p>
                <p className='p-text'>All rights reserved</p>
            </div>
            {/* <div className = {`divider divider-${pathname}`}> */}
            <div className = {`divider`}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
              <path
                d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>


        <NavigationDots active={idName} />


    </div>
    
  )
}

export default AppWrap;