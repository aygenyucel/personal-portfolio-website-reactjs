import React from 'react';


function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`}
                key= {item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: 'var(--green5-color)' } : { backgroundColor: '#fff'} }
            />    
        ))}
    </div>
  )
}

export default NavigationDots