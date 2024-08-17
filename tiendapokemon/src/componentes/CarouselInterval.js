import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function CarouselInterval() {
  return (  
    <Carousel className="carouselContainer">
      <Carousel.Item interval={1000}>

           <CarouselImage image="/image/Bulbasaur.jpg" text="Bulbasaur" />

        <Carousel.Caption className="carousel-caption">
          <h3>Bulbasaur</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>

            <CarouselImage image="/image/ivysaur.jpg" text="Ivysaur" />
          
        <Carousel.Caption className="carousel-caption">
          <h3>Ivysau</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <CarouselImage image="/image/Venusaur.jpg" text="Venusaur" />
        <Carousel.Caption className="carousel-caption">
          <h3>Venusaur</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInterval;