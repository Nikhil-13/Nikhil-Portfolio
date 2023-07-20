import { useForm } from 'react-hook-form'

function Contact() {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => console.log(data)
	return (
		<section id='contact'>
			<h1>Contact</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='First name'
					{...register('First name', { required: true, maxLength: 80 })}
				/>
				<input
					type='text'
					placeholder='Email'
					{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				<textarea {...register} />

				<input type='submit' />
			</form>
		</section>
	)
}

export default Contact
