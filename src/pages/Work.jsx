import { work } from '../data/data.js'
import Card from '../components/shared/Card'
// import { useEffect } from 'react'
function Work() {
	return (
		<section id='work'>
			<h1>Work</h1>
			<div className='card-wrapper'>
				{work.map((workItem) => (
					<Card key={workItem.id} workItem={workItem} />
				))}
			</div>
		</section>
	)
}

export default Work
