import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../context/AnimationContext'

function Sidebar() {
	const { socialItemVariants, socialLinksContainer } = useContext(AnimationContext)
	return (
		<aside>
			<div className='logo-header'>
				<Link to='/'>logo</Link>
			</div>
			<motion.div
				className='social-links'
				variants={socialLinksContainer}
				initial='hidden'
				animate='visible'>
				<motion.a
					href='https://github.com/Nikhil-13'
					target='__blank'
					variants={socialItemVariants}>
					<Github />
				</motion.a>
				<motion.a
					href='https://stackoverflow.com/users/13827711/nikhil'
					target='__blank'
					variants={socialItemVariants}>
					<StackOverflow />
				</motion.a>
				<motion.a
					href='https://www.linkedin.com/in/nikhil-kumar-51294b11b/'
					target='__blank'
					variants={socialItemVariants}>
					<Linkedin />
				</motion.a>
			</motion.div>
		</aside>
	)
}

export default Sidebar
