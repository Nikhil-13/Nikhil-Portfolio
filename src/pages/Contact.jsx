import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import AnimationContext from '../context/AnimationContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const {
    VITE_EMAIL_JS_SERVICE_ID: serviceID,
    VITE_EMAIL_JS_TEMPLATE_ID: templateID,
    VITE_EMAIL_JS_PUBLIC_KEY: publicKey,
  } = import.meta.env;

  const { headingAnimation, container, item } = useContext(AnimationContext);
  const successToast = () => toast.success('Message Sent');
  const errorToast = () => toast.error('Something went Wrong! 😪');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef();
  const sendEmail = (data) => {
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        successToast();
        reset();
      },
      (error) => {
        errorToast();
      }
    );

    reset();
  };

  return (
    <section id='contact'>
      <ToastContainer theme='dark' />
      <div>
        <motion.div
          animate={headingAnimation.animate}
          initial={headingAnimation.initial}
          variants={headingAnimation}
          transition={headingAnimation.transition}
        >
          <h1>Contact</h1>
        </motion.div>
      </div>
      <motion.div
        className='form-container'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
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
  );
}

export default Contact;
