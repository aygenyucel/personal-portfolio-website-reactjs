import React from 'react';


function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`}
                key= {item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: 'var(--blue1-color)' } : { backgroundColor: 'var(--black-color)'} }
            />    
        ))}
    </div>
  )
}

export default NavigationDots