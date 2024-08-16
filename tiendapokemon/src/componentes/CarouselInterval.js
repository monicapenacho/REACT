import Carousel from 'react-bootstrap/Carousel';

function CarouselInterval() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
            <img

            className="d-block w-100"

            src="/image/Bulbasaur.jpg"

            alt="Bulbasaur"

            width={10}

            />

        <Carousel.Caption>
          <h3>Bulbasaur</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
            <img

            className="d-block w-100"

            src="/image/ivysaur.jpg"

            alt="Ivysaur"

            width={10}

            />
        <Carousel.Caption>
          <h3>Ivysau</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img

            className="d-block w-100"

            src="/image/Venusaur.jpg"

            alt="Venusaur"

            width={10}

            />
        <Carousel.Caption className="Carousel">
          <h3>Venusaur</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInterval;