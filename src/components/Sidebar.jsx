import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons'

function Sidebar() {
	return (
		<aside>
			<div className='logo-header'>logo</div>
			<div className='social-links'>
				<a href='#' target='__blank'>
					<Github />
				</a>
				<a href='#' target='__blank'>
					<StackOverflow />
				</a>
				<a href='#' target='__blank'>
					<Linkedin />
				</a>
			</div>
		</aside>
	)
}

export default Sidebar
