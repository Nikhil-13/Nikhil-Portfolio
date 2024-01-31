import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import AnimationContext from '../../context/AnimationContext'; /* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import './projectCardStyles.css';
import Autoplay from 'embla-carousel-autoplay';

function ProjectCard({ projectItem }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { item } = useContext(AnimationContext);
  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()); // Access API
  //   }
  // }, [emblaApi]);

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
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'baseline',
        }}
      >
        <h3 className='company-name'>{projectItem?.title}</h3>
      </div>
      <p className='job-description'>{projectItem?.description}.</p>
      <hr style={{ opacity: '.5' }} />
      <div className='project-tech-stack'>
        {projectItem?.stack.map((stackItem) => (
          // eslint-disable-next-line react/jsx-key
          <span className='tech-stack-item'>{stackItem} | </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
