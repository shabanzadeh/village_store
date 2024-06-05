import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  const phoneNumber = '+4915901367047';
  const message = 'Whatsapp Inquiry';

  return (
   

    <div className="flex-auto h-screen text-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500  text-white ...">
      <div>
        <h2 className='text-2xl p-10'>CONTACT WITH US</h2>
      </div>
      <div className="text-center mt-10">
      <a href={`tel:${phoneNumber}`} className='cart-text mb-2 text-blue-500 ' style={{color: 'white', backgroundColor: 'gray'}} >
         tel: {phoneNumber}
      </a>
      </div>
      <div>
      <ReactWhatsapp
        number={phoneNumber}
        message={message}
        className="whatsapp-button mt-4"
        style={{ color: 'white', backgroundColor: '#075E54' }}
      >
        Contact us via WhatsApp
      </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Contact;
