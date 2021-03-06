import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';


function Work() {

  const [activeFilter, setActiveFilter] = useState('All');

  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y:100, opacity:0 }])

    setTimeout (() => {
      setAnimateCard([{ y:0, opacity: 1}])
      
      if(item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    },500)
  }

  return (
    <>
      <h2 className="head-text-green">MY PROJECTS</h2>

      <div className='app__work-filter'>
        {['UI/UX', 'REACT JS', 'HTML', 'JAVACRIPT', 'CSS', 'SCSS', 'ALL'].map((item, index) => 
          <div 
            className={`app__work-filter-item app__flex p-text-green ${activeFilter === item ? "item-active" : ""}`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
            
          </div>
        )}
      </div>

      <motion.div
        animate = {animateCard}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className = 'app__work-portfolio'
      >
        {filterWork.map((work, index) =>
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0,1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text-green'>{work.title}</h4>
              <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        )}

      </motion.div>

      {/* <div class="custom-shape-divider-bottom-1657991521">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
        </svg>
      </div> */}

    </>
    
  )  
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__grey1bg'
);