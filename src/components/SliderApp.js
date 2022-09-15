import Carousel from 'react-bootstrap/Carousel';
import slider from './slider';

function CarouselFadeExample() {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="Slider1"
          src={slider.img1}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Slider1"
          src={slider.img2}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Slider1"
          src={slider.img3}
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;