import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../../context/AnimationContext' /* eslint-disable react/prop-types */
function Card({ workItem }) {
	const { item } = useContext(AnimationContext)

	return (
		<motion.div className='work-card' variants={item}>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'baseline',
				}}>
				<h3 className='company-name'>
					<a href={workItem.companyUrl} target='_blank' rel='noopener noreferrer'>
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
					<span className='tech-stack-item'>{stackItem} | </span>
				))}
			</div>
		</motion.div>
	)
}

export default Card
