import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../context/AnimationContext';
function About() {
  const date = new Date();
  const { headingAnimation, container, item } = useContext(AnimationContext);

  return (
    <section id='about'>
      <motion.div
        animate={headingAnimation.animate}
        initial={headingAnimation.initial}
        variants={headingAnimation}
        transition={headingAnimation.transition}
      >
        <h1>About</h1>
      </motion.div>
      <motion.div
        className='about-content'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={item} style={{ alignItems: 'center' }}>
          <h3>Hi there,</h3>
          {/* <p>
            I&apos;m Nikhil, a{' '}
            {date.getFullYear() - (date.getMonth() < 11 ? 1998 : 1997)} year old
            Front-End Web Developer based in Chandigarh, India. I have always
            had a keen interest in building up things up from scratch, which is
            why i chose this career; it gives me a sense of fulfillment.
          </p> */}
          <p>
            I'm Nikhil, a self-taught web developer who took a detour into the
            world of mobile app development. Currently based in Chandigarh,
            India, I'm all about turning cool ideas into user-friendly digital
            experiences.
          </p>
          <p>
            Ever-changing tech scene and constantly learning new things is what
            gives me edge. Dive into my portfolio to see how I blend creativity
            with code, bringing ideas to life in the realm of mobile
            applications!
          </p>
          {/* <p>
            I try to stay updated with the latest web development trends and
            best practices. Continuous learning is a crucial aspect of my
            journey as it allows me to enhance my skills and deliver.
          </p> */}
        </motion.div>
        <motion.div className='avatar' variants={item}>
          <img src='https://placehold.co/400' alt='ksdjfdf' />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
