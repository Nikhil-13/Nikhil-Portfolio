import { createContext } from 'react'
const AnimationContext = createContext()

export const AnimationContextProvider = ({ children }) => {
	const socialLinksContainer = {
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

	const socialItemVariants = {
		hidden: {
			opacity: 0,
			x: -20,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	}
	return (
		<AnimationContext.Provider value={{ socialItemVariants, socialLinksContainer }}>
			{children}
		</AnimationContext.Provider>
	)
}

export default AnimationContext
