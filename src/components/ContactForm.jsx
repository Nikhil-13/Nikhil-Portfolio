import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
	const [formData, setFormData] = useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		setFormData(data), console.log(data)
	}

	// console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='Name'
				{...register('Name', { required: true, maxLength: 80 })}
			/>
			<input
				type='text'
				placeholder='Email'
				{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				style={errors.Email && { borderColor: 'red' }}
			/>

			<textarea
				placeholder='Write your message here...'
				{...register('Subject', { required: true, max: 200, min: 50, maxLength: 300 })}
			/>
			<input type='submit' />
		</form>
	)
}
