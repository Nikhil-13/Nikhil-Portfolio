import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../../context/AnimationContext'; /* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import './projectCardStyles.css';
import Autoplay from 'embla-carousel-autoplay';

function ProjectCard({ projectItem }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { item } = useContext(AnimationContext);

  return (
    <motion.div className='project-card' variants={item}>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {projectItem?.images.map((item) => (
            <div className='embla__slide' key={item}>
              <img src={item} />
            </div>
          ))}
        </div>
      </div>

      <div className='detail-container'>
        <h3 className='company-name'>{projectItem?.title}</h3>
        <p className='job-description'>{projectItem?.description}</p>
        <hr style={{ opacity: '.5' }} />
        <div className='project-tech-stack'>
          {projectItem?.stack.map((stackItem) => (
            // eslint-disable-next-line react/jsx-key
            <span className='tech-stack-item' key={stackItem}>
              {stackItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
