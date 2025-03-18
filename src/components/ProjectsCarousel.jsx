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
            <Link to="/not-art"><Image src="../../ByteSizeHabits/ByteSizeHabits_Main.png" fluid/></Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/byte-size-habits"><Image src="../../ByteSizeHabits/ByteSizeHabits_Main.png" fluid/></Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/ncnews"> <Image src="../BorderlineArts_Main.png" fluid/></Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/borderline-arts"><Image src="../BorderlineArts_Main.png" fluid/></Link>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ProjectsCarousel;
