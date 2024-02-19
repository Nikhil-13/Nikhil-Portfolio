import { PROJECTS } from '../data/data.js';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../context/AnimationContext';
import ProjectCard from '../components/shared/ProjectCard';
function Projects() {
  const { headingAnimation, container } = useContext(AnimationContext);

  let type = '';

  const getSubtitle = (item) => {
    if (type === '') {
      type = item.type;
      return <h1>abc</h1>;
    } else if (type !== item.type) {
      type = item.type;
      return <h1>xyz</h1>;
    }
  };

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
        {PROJECTS.map((projectItem) => {
          getSubtitle(projectItem);
          return <ProjectCard key={projectItem.id} projectItem={projectItem} />;
        })}
      </motion.div>
    </section>
  );
}

export default Projects;
