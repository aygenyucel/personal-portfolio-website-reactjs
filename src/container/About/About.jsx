import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { ArrowBackOutlined } from '@mui/icons-material';
import { AppWrap, MotionWrap } from '../../wrapper';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">WHO AM I?</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text-dark" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__darkbluebg'
);