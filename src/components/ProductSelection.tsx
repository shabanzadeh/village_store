import React from 'react';
const ProductSelection = () => {
    

const sendWhatsAPPMessage =(productName: string)=>{

    const phone = '+15901367047';
    const msg = encodeURIComponent(`Hello, a user has select the product: ${productName}`);
    const url = `https://wa.me/${phone}?text=${msg}`;
    return url

}

return(
    <div>
        <button onClick = {()=>sendWhatsAPPMessage('Product 1')}>Select Product 1</button>
        <button onClick = {()=>sendWhatsAPPMessage('Product 2')}>Select Product 2</button>
    </div>
)
}

export default ProductSelection