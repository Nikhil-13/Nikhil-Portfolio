import { useForm } from 'react-hook-form'
import ContactForm from '../components/ContactForm'

function Contact() {
	return (
		<section id='contact'>
			<h1>Contact</h1>
			<div className='form-container'>
				<ContactForm />
			</div>
		</section>
	)
}

export default Contact
