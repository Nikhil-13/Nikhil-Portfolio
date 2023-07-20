import { work } from '../../data/data'

/* eslint-disable react/prop-types */
function Card({ workItem }) {
	return (
		<div className='work-card'>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'baseline',
				}}>
				<h3 className='company-name'>
					<a href='' target='_blank' rel='noopener noreferrer'>
						{workItem.company}
					</a>
				</h3>
				<span className='wrok-duration' style={{ opacity: '.7' }}>
					{workItem.years}
				</span>
			</div>
			<p className='job-role' style={{ fontSize: '1.015rem', fontWeight: 'bold' }}>
				{workItem.role}
				<span
					className='job-location'
					style={{
						fontSize: '1.025rem',
						opacity: '.8',
						marginLeft: '5px',
						fontWeight: 'normal',
					}}>
					{workItem.location}
				</span>
			</p>
			<p className='job-description'>{workItem.description}.</p>
			<hr style={{ opacity: '.5' }} />
			<div className='tech-stack'>
				{workItem.stack.map((stackItem) => (
					// eslint-disable-next-line react/jsx-key
					<span className='tech-stack-item'>{stackItem}</span>
				))}
			</div>
		</div>
	)
}

export default Card
