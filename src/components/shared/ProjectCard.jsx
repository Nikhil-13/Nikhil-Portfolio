import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import AnimationContext from '../../context/AnimationContext'; /* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import './projectCardStyles.css';
import Autoplay from 'embla-carousel-autoplay';

function ProjectCard({ projectItem }) {
  console.log(projectItem);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { item } = useContext(AnimationContext);
  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()); // Access API
  //   }
  // }, [emblaApi]);

  return (
    <motion.div className='work-card' variants={item}>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {projectItem?.images.map((item) => (
            <div className='embla__slide' key={item}>
              <img src={item} />
            </div>
          ))}

          {/* <div className='embla__slide'>Slide 2</div>
          <div className='embla__slide'>Slide 3</div> */}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'baseline',
        }}
      >
        <h3 className='company-name'>
          {/* <a
            href={projectItem.companyUrl}
            target='_blank'
            rel='noopener noreferrer'
          > */}
          {projectItem?.title}
          {/* </a> */}
        </h3>
        {/* <span className='wrok-duration' style={{ opacity: '.7' }}>
          {workItem.years}
        </span> */}
      </div>
      {/* <p
        className='job-role'
        style={{ fontSize: '1.015rem', fontWeight: 'bold' }}
      >
        {workItem.role}
        <span
          className='job-location'
          style={{
            fontSize: '1.025rem',
            opacity: '.8',
            marginLeft: '5px',
            fontWeight: 'normal',
          }}
        >
          {workItem.location}
        </span>
      </p> */}
      <p className='job-description'>{projectItem?.description}.</p>
      {/* <hr style={{ opacity: '.5' }} /> */}
    </motion.div>
  );
}

export default ProjectCard;
