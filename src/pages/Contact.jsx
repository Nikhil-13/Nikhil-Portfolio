import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../context/AnimationContext'

function Contact() {
	const { headingAnimation, container, item } = useContext(AnimationContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<section id='contact'>
			<div>
				<motion.div
					animate={headingAnimation.animate}
					initial={headingAnimation.initial}
					variants={headingAnimation}
					transition={headingAnimation.transition}>
					<h1>Contact</h1>
				</motion.div>
			</div>
			<motion.div
				className='form-container'
				variants={container}
				initial='hidden'
				animate='visible'>
				<motion.form onSubmit={handleSubmit(onSubmit)} variants={item}>
					<input
						type='text'
						placeholder='Name'
						{...register('Name', { required: true, maxLength: 80 })}
						style={errors.Name && { borderColor: 'red' }}
					/>
					<input
						type='text'
						placeholder='Email'
						{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
						style={errors.Email && { borderColor: 'red' }}
					/>
					<input
						type='text'
						placeholder='Subject'
						{...register('Subject', { required: true, maxLength: 30 })}
						style={errors.Subject && { borderColor: 'red' }}
					/>

					<textarea
						placeholder='Write your message here...'
						{...register('Message', {
							required: true,
							max: 200,
							min: 50,
							maxLength: 300,
						})}
					/>
					<input
						type='submit'
						disabled={Object.keys(errors).length === 0 ? false : true}
					/>
				</motion.form>
			</motion.div>
		</section>
	)
}

export default Contact
