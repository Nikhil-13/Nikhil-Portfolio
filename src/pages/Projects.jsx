import { PROJECTS } from '../data/data.js';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../context/AnimationContext';
import ProjectCard from '../components/shared/ProjectCard';
// import { useEffect } from 'react'
function Projects() {
  const { headingAnimation, container } = useContext(AnimationContext);
  console.log(PROJECTS);

  return (
    <section id='work'>
      <motion.div
        animate={headingAnimation.animate}
        initial={headingAnimation.initial}
        variants={headingAnimation}
        transition={headingAnimation.transition}
      >
        <h1>Projects</h1>
      </motion.div>
      <motion.div
        className='card-wrapper'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {PROJECTS.map((projectItem) => (
          <ProjectCard key={projectItem.id} projectItem={projectItem} />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
