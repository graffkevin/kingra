import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Row from 'react-bootstrap/Row';
import './styleContact.css';

function ContactMe() {
  const form = useRef();
  console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_prsaskm', 'template_9s7mgki', form.current, 'Z3LPMqicE51J4_hgb')
      .then((result) => {
          console.log(result.text);
          alert('Votre E-mail a été envoyé avec succès. ');

      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='formContainer'>

        <Row> 
          <input style={{width:'40%'}} placeholder='Nom - Prénom :' type="text" name="user_name" />
        </Row>
        <Row className ='spaceRow'>
          <input style={{width:'40%'}} placeholder='Email :' type="email" name="user_email" />
        </Row>
        <Row className ='spaceRow'>
          <textarea placeholder='Message :' style={{width:'40%', height:'100px!important'}} name="message" />
        </Row>
        <Row className ='spaceRow'>
          <input className ='btnContac' type="submit" value="Send" />
        </Row>
      
      </div>
   
      
    </form>
  );
};

export default ContactMe;