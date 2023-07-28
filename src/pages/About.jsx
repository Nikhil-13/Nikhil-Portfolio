import { motion } from 'framer-motion'
function About() {
	return (
		<section id='about'>
			<motion.h1
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				About
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 200, x: 50, filter: 'blur(5px)' }}
				animate={{ opacity: 1, y: 0, x: 0, filter: 'blur(0)' }}
				transition={{
					duration: 0.7,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam amet
				laborum ab odit eveniet, deleniti aspernatur ratione quisquam quod animi maxime
				dolorem eaque asperiores voluptatibus vitae sequi sint, itaque magnam impedit
				architecto ipsam consequuntur quaerat consectetur? Recusandae aut sint optio
				dolores incidunt earum, vel, corporis eos nobis possimus minus, doloribus ratione
				iusto totam labore autem enim sed. Error atque id sed officia nihil optio quia
				dolorum voluptatem voluptate repellendus? Necessitatibus sunt reiciendis soluta
				iste suscipit omnis, illum placeat, ipsum deleniti harum accusantium maiores
				officiis ipsam quae, odio possimus consectetur repudiandae voluptas magnam? Culpa
				exercitationem cupiditate at repellendus delectus quae.
			</motion.p>
		</section>
	)
}

export default About
