import { Carousel } from 'react-bootstrap';
import onlineShop from '../assets/onlieShop.jpeg';


const CarouselShop = () => {
  return (
    <div className="container carousel-container ">
      <Carousel id="carouselExampleIndicators">
       
        <Carousel.Item>
          <div className="flex justify-center">
            <img className="object-contain h-20 w-50" src={onlineShop} alt="Second slide" />
          </div>
    
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="text-center flex-grow">
            <div className="text-center h-20 pt-6 text-gray-800 text-xl font-semibold">
              Village Store
            </div>
          </div>
  
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselShop;
