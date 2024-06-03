import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  const phoneNumber = '+4915901367047';
  const message = 'Whatsapp Inquiry';

  return (
    <div className="text-center">
      <div>
        <h2 className='text-2xl mt-10'>CONTACT WITH US</h2>
      </div>
      <div className="text-center mt-10">
      <a href={`tel:${phoneNumber}`} className='cart-text mb-2 text-blue-500' style={{color: 'blue-500', backgroundColor: 'gray'}} >
         tel: {phoneNumber}
      </a>
      </div>
      <ReactWhatsapp
        number={phoneNumber}
        message={message}
        className="whatsapp-button mt-4"
        style={{ color: 'white', backgroundColor: '#075E54' }}
      >
        Contact us via WhatsApp
      </ReactWhatsapp>
    </div>
  );
};

export default Contact;
