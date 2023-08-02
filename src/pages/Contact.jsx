import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import AnimationContext from '../context/AnimationContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
	const { headingAnimation, container, item } = useContext(AnimationContext)
	const notify = () => toast.success('Message Sent')
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const onSubmit = async (data) => {
		console.log(data)
		notify()
		reset()
	}

	return (
		<section id='contact'>
			<ToastContainer theme='dark' />
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
				<motion.form onSubmit={handleSubmit(onSubmit)}>
					<motion.input
						type='text'
						placeholder='Name'
						{...register('Name', { required: true, maxLength: 80 })}
						style={errors.Name && { borderColor: 'red' }}
						variants={item}
					/>
					<motion.input
						type='text'
						placeholder='Email'
						{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
						style={errors.Email && { borderColor: 'red' }}
						variants={item}
					/>
					<motion.input
						type='text'
						placeholder='Subject'
						{...register('Subject', { required: true, maxLength: 30 })}
						style={errors.Subject && { borderColor: 'red' }}
						variants={item}
					/>

					<motion.textarea
						placeholder='Write your message here...'
						{...register('Message', {
							required: true,
							max: 200,
							min: 50,
							maxLength: 300,
						})}
						variants={item}
					/>
					<motion.input
						type='submit'
						disabled={Object.keys(errors).length === 0 ? false : true}
						variants={item}
					/>
				</motion.form>
			</motion.div>
		</section>
	)
}

export default Contact
