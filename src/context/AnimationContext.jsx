import { createContext } from 'react'
const AnimationContext = createContext()

export const AnimationContextProvider = ({ children }) => {
	const headingAnimation = {
		initial: {
			opacity: 0,
			y: 10,
			x: -10,
		},
		animate: {
			opacity: 1,
			y: 0,
			x: 0,
		},
		transition: {
			duration: 0.3,
			delay: 0.2,
		},
	}
	const container = {
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

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}
	return (
		<AnimationContext.Provider value={{ headingAnimation, container, item }}>
			{children}
		</AnimationContext.Provider>
	)
}

export default AnimationContext
