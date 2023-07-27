import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Sidebar() {
	return (
		<aside>
			<div className='logo-header'>
				<Link to='/'>logo</Link>
			</div>
			<div className='social-links'>
				<a href='https://github.com/Nikhil-13' target='__blank'>
					<Github />
				</a>
				<a href='https://stackoverflow.com/users/13827711/nikhil' target='__blank'>
					<StackOverflow />
				</a>
				<a href='https://www.linkedin.com/in/nikhil-kumar-51294b11b/' target='__blank'>
					<Linkedin />
				</a>
			</div>
		</aside>
	)
}

export default Sidebar
