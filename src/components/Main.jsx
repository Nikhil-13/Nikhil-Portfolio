import { Link } from 'react-router-dom'
function Main() {
	return (
		<main>
			<section className='hero' id='hero'>
				<div>
					<h1>Hey</h1>
					<h1>I'm Nikhil</h1>
				</div>
				<div className='btns'>
					<Link to='/about'>
						<button>
							<span>About</span>
						</button>
					</Link>
					<Link to='/work'>
						<button>
							<span>Work</span>
						</button>
					</Link>
					<Link to='/contact'>
						<button>
							<span>Contact</span>
						</button>
					</Link>
				</div>
			</section>
		</main>
	)
}

export default Main
