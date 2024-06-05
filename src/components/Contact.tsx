import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  const phoneNumber = '+4915901367047';
  const message = 'Whatsapp Inquiry';

  return (
    <div className='overflow-hidden flex items-center justify-center'>
      <div className="text-center text-white max-w-md mx-auto p-4">
        <h2 className='text-2xl p-10'>CONTACT WITH US</h2>
        <div className="mt-10">
          <a href={`tel:${phoneNumber}`} className='inline-block mb-4 p-4 rounded bg-gray-700' style={{ color: 'white' }}>
            tel: {phoneNumber}
          </a>
        </div>
        <div>
          <ReactWhatsapp
            number={phoneNumber}
            message={message}
            className="inline-block mt-4 p-4 rounded"
            style={{ color: 'white', backgroundColor: '#075E54' }}
          >
            Contact us via WhatsApp
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
};

export default Contact;
