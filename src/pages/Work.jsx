import { work } from '../data/data.js';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../context/AnimationContext';
import Card from '../components/shared/Card';
// import { useEffect } from 'react'
function Work() {
  const { headingAnimation, container } = useContext(AnimationContext);

  return (
    <section id='work'>
      <motion.div
        animate={headingAnimation.animate}
        initial={headingAnimation.initial}
        variants={headingAnimation}
        transition={headingAnimation.transition}
      >
        <h1>Work</h1>
      </motion.div>
      <motion.div
        className='card-wrapper'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {work.map((workItem) => (
          <Card key={workItem.company} workItem={workItem} />
        ))}
      </motion.div>
    </section>
  );
}

export default Work;
