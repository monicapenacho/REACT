import Carousel from 'react-bootstrap/Carousel';


function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        
          <img

          className="d-block w-100"

          src="/image/Bulbasaur.jpg"

          alt="First slide"

          width={100}

          />

        <Carousel.Caption>
          <h3>Bulbasaur</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img

          className="d-block w-100"

          src="/image/ivysaur.jpg"

          alt="Second slide"

          width={100}

          />
        <Carousel.Caption>
          <h3>Ivysaur</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
           <img

          className="d-block w-100"

          src="/image/Venusaur.jpg"

          alt="Third slide"

          width={100}

          />
        <Carousel.Caption>
          <h3>Venusaur</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;