import './contact.css';

import React, { useRef } from 'react';

import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6b5y2wq',
      'template_hb4500v',
      form.current,
      'zSLpp2_7DifTfprWp'
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon ' />
            <h4>Email</h4>
            <h5>nnrohu@gmail.com</h5>
            <a href='mailto:nnrohu@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon ' />
            <h4>WhatsApp</h4>
            <h5>+918360188318</h5>
            <a
              href='whatsapp://send?text=Hello From Guthub Portfolio!&phone=+918360188318'
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            placeholder='Your Message'
            rows='7'
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
