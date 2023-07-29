import { motion } from 'framer-motion'
function About() {
	const date = new Date()
	return (
		<section id='about'>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.7,
					delay: 0.2,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				About
			</motion.h1>
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
					I'm Nikhil a {date.getFullYear() - (date.getMonth() < 11 ? 1998 : 1997)} year
					old Front-End Web Developer based in Chandigarh, India. I always had a keen for
					building up things up from scratch, that is why i chose this career.
				</div>
				<div className='avatar'>
					<img src='.\public\miless.jpg' alt='ksdjfdf' />
				</div>
			</motion.div>
		</section>
	)
}

export default About
