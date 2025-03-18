import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsCarousel() {
  return (
    <Container>
      <h2 className="text-center display-4 fw-bold pb-2">
        <Link className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black" to="/projects">
          Recent Projects
        </Link>
      </h2>
      <Carousel>
        <Carousel.Item>
          <Image src="../ByteSizeHabits_Main.png" fluid/>
          {/* <Carousel.Caption className="text-bg-dark d-none d-md-block">
            <h3 className="fw-bold fs-3 text-light"><Link className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-light">Not Art</Link></h3>
            <p className="fs-5 text-light">
              A web application bringing Nottingham&#39;s creative community
              together, allowing the user to search for and sign up for art and
              cultural events in their area.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../ByteSizeHabits_Main.png" fluid/>
          {/* <Carousel.Caption className="text-bg-dark d-none d-md-block">
            <h3 className="fw-bold fs-3 text-light"><Link className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-light" to="/byte-size-habits">Byte Size Habits</Link></h3>
            <p className="fs-5 text-light">
              Byte Size Habits is a habit tracker web application specifically
              designed to help users learn how to code and improve their
              programming skills.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../BorderlineArts_Main.png" fluid/>
          {/* <Carousel.Caption className="text-bg-dark d-none d-md-block">
            <h3 className="fw-bold fs-3 text-light"><Link className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-light" to="/ncnews">NC News</Link></h3>
            <p className="fs-5 text-light">
              A social news aggregation, web content rating and discussion
              website.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image src="../BorderlineArts_Main.png" fluid/>
          {/* <Carousel.Caption className="text-bg-dark d-none d-md-block">
            <h3 className="fw-bold fs-3 text-light"><Link className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-light" to="/borderline-arts">Borderline Arts</Link></h3>
            <p className="fs-5 text-light">
              Redesign of a local mental health charity&#39;s website as part of
              their online initiative to rebrand for their 10 year anniversary.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ProjectsCarousel;
