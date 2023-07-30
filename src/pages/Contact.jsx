import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

function Contact() {
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
					initial={{ opacity: 0, y: 10, x: -10 }}
					animate={{ opacity: 1, y: 0, x: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}>
					<h1>Contact</h1>
				</motion.div>
			</div>
			<div className='form-container'>
				<form onSubmit={handleSubmit(onSubmit)}>
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
				</form>
			</div>
		</section>
	)
}

export default Contact
