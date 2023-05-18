import Carousel from 'react-bootstrap/Carousel';
import  slideshow4 from '../icone/4slideshow.jpg';
import  slideshow0 from '../icone/0slideshow.jpg';
import  slideshow1 from '../icone/1slideshow.jpg';
import  slideshow2 from '../icone/2slideshow.jpg';
import  slideshow3 from '../icone/3slideshow.jpg';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideshow0} 
          alt=" slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slideshow1} 
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slideshow2} 
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slideshow3} 
          alt="Third slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slideshow4} 
          alt="Third slide"
        />
   
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;