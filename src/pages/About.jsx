import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../context/AnimationContext'
function About() {
	const date = new Date()
	const { headingAnimation } = useContext(AnimationContext)

	return (
		<section id='about'>
			<motion.div
				animate={headingAnimation.animate}
				initial={headingAnimation.initial}
				variants={headingAnimation}
				transition={headingAnimation.transition}>
				<h1>About</h1>
			</motion.div>
			<motion.div
				className='about-content'
				initial={{ opacity: 0, y: 200, x: 50 }}
				animate={{ opacity: 1, y: 0, x: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				<div>
					<h3>Hi there!</h3>
					I&apos;m Nikhil, a {date.getFullYear() -
						(date.getMonth() < 11 ? 1998 : 1997)}{' '}
					year old Front-End Web Developer based in Chandigarh, India. I have always had a
					keen interest in building up things up from scratch, which is why i chose this
					career, it gives me a sense of fulfillment.
				</div>
				<div className='avatar'>
					<img src='https://placehold.co/400' alt='ksdjfdf' />
				</div>
			</motion.div>
		</section>
	)
}

export default About
