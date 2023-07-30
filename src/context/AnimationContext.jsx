import { createContext } from 'react'
const AnimationContext = createContext()

export const AnimationContextProvider = ({ children }) => {
	const stackContainer = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2,
				staggerChildren: 0.2, // This will stagger the animations of child elements
			},
		},
	}

	const stackItem = {
		hidden: {
			opacity: 0,
			x: -20,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	}

	const headingAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 1,
			delay: 0.2,
			ease: [0, 0.71, 0.2, 1.01],
		},
	}

	const cardContainer = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}

	const cardItem = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}
	return (
		<AnimationContext.Provider
			value={{ stackItem, stackContainer, cardContainer, cardItem, headingAnimation }}>
			{children}
		</AnimationContext.Provider>
	)
}

export default AnimationContext
