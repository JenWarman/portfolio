import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsCarousel() {
  return (
    <Container className="p-2">
      <h2 className="text-center fs-1 fw-bold pb-2 ">
        <Link className="recent-projects-link" to="/projects">
          Recent Projects
        </Link>
      </h2>
      <Carousel>
        <Carousel.Item>
          <Image src="../NCNews.png" />
          <Carousel.Caption className="text-bg-dark p-3">
            <h3 className="fw-bold fs-3 text-light">Not Art</h3>
            <p className="fs-5 text-light">
              A web application bringing Nottingham&#39;s creative community
              together, allowing the user to search for and sign up for art and
              cultural events in their area.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../NCNews.png" />
          <Carousel.Caption className="text-bg-dark p-3">
            <h3 className="fw-bold fs-3 text-light">Byte Size Habits</h3>
            <p className="fs-5 text-light">
              Byte Size Habits is a habit tracker web application specifically
              designed to help users learn how to code and improve their
              programming skills.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../NCNews.png" />
          <Carousel.Caption className="text-bg-dark p-3">
            <h3 className="fw-bold fs-3 text-light">NC News</h3>
            <p className="fs-5 text-light">
              A social news aggregation, web content rating and discussion
              website.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../NCNews.png" />
          <Carousel.Caption className="text-bg-dark p-3">
            <h3 className="fw-bold fs-3 text-light">Borderline Arts</h3>
            <p className="fs-5 text-light">
              Redesign of a local mental health charity’s website as part of
              their online initiative to rebrand for their 10 year anniversary.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ProjectsCarousel;
