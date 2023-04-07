import React, { useState, useEffect } from 'react';
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import ReactDOM from "react-dom";

import './Skills.scss';

function Skills() {

  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    })
    client.fetch(query).then((data) => {
      setExperiences(data);
    })
  }, [])
  
  return (
    <>
      <h2 className="head-text">SKILLS</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div className='app__experiences-list'>

          {experiences?.map((experience) => (
            <motion.div
              className='app__experiences-item'
              key={experience.year}
            >
              <div>{experience.year}</div>
              <div className='app__experiences-year'>
                <p className='bold-text'>{experience.year}</p>
                
              </div>
              <motion.div
                className='app__experiences-works'
              >
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__experiences-work-item'
                      data-tip 
                      data-for={work.name}
                      key={work.name}
                    >
                      <div>{work.name}</div>
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text-dark'>{work.company}</p>
                    </motion.div> 
        
                    <ReactToolTip
                      id = {work.name}
                      effect = 'solid'
                      arrowColor = '#fff'
                      className = 'skills-tooltip'
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>   
                ))}
              </motion.div>
            </motion.div>
          
          ))}

        </motion.div> */}

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__darkbluebg'
);