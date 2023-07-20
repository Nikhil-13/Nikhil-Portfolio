function Card() {
	return (
		<div className='work-card'>
			<div>
				<h4 className='company-name'>
					<a href='' target='_blank' rel='noopener noreferrer'>
						Moka Financial Technologies
					</a>
				</h4>
				<span className='wrok-duration' style={{ opacity: '.7' }}>
					11/2020-12-2022
				</span>
			</div>
			<p className='job-role' style={{ fontSize: '1.25rem' }}>
				Full Stack Developer{' '}
				<span className='job-location' style={{ fontSize: '1.025rem', opacity: '.8' }}>
					Montreal, Canada
				</span>
			</p>
			<p className='job-description'>
				Worked on the Moka mobile application building crucial features related to KYC and
				money movement on both the front-end and back-end. I was also able to teach more
				advanced TypeScript to my colleagues, through PR reviews and "lunch &amp; learns".
			</p>
			<hr style={{ opacity: '.5' }} />
			<div className='tech-stack'>
				<span className='tech-stack-item'>React Native</span>
				<span className='tech-stack-item'>TypeScript</span>
				<span className='tech-stack-item'>Node.js</span>
				<span className='tech-stack-item'>MongoDB</span>
				<span className='tech-stack-item'>GraphQL</span>
			</div>
		</div>
	)
}

export default Card
