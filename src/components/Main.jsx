import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../context/AnimationContext'

function Main() {
	const { stackItem, stackContainer } = useContext(AnimationContext)

	return (
		<main>
			<section className='hero' id='hero'>
				<div>
					<h2>Hey</h2>
					<h1 data-name='Nikhil'>I&apos;m Nikhil</h1>
				</div>
				<motion.div
					className='btns'
					variants={stackContainer}
					initial={stackContainer.hidden}
					animate={stackContainer.visible}>
					<Link to='/about'>
						<motion.button
							variants={stackItem}
							initial={stackItem.hidden}
							animate={stackItem.visible}>
							<span>About</span>
						</motion.button>
					</Link>
					<Link to='/work'>
						<motion.button
							variants={stackItem}
							initial={stackItem.hidden}
							animate={stackItem.visible}>
							<span>Work</span>
						</motion.button>
					</Link>
					<Link to='/contact'>
						<motion.button
							variants={stackItem}
							initial={stackItem.hidden}
							animate={stackItem.visible}>
							<span>Contact</span>
						</motion.button>
					</Link>
				</motion.div>
			</section>
		</main>
	)
}

export default Main
