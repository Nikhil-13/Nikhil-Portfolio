import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AnimationContext from '../context/AnimationContext';

function Main() {
  const { container, item } = useContext(AnimationContext);

  return (
    <main>
      <section className='hero' id='hero'>
        <div>
          <h2>Hey</h2>
          <h1 data-name='Nikhil'>I&apos;m Nikhil</h1>
        </div>

        <motion.div
          className='btns'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <Link to='/about'>
            <motion.button variants={item}>
              <span>About</span>
            </motion.button>
          </Link>

          <Link to='/projects'>
            <motion.button variants={item}>
              <span>Projects</span>
            </motion.button>
          </Link>
          <Link to='/work'>
            <motion.button variants={item}>
              <span>Work</span>
            </motion.button>
          </Link>

          <Link to='/contact'>
            <motion.button variants={item}>
              <span>Contact</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Main;
