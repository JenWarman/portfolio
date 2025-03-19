import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsCarousel() {
  return (
    <Container className="pb-5">
      <h2 className="text-center display-4 fw-bold pb-2">
        <Link
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
          to="/projects"
        >
          Recent Projects
        </Link>
      </h2>
      <Carousel>
        <Carousel.Item>
          <Link
            to="/not-art"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <Image src="../../NotArt/NotArt_Main.png" fluid />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/byte-size-habits"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <Image src="../../ByteSizeHabits/ByteSizeHabits_Main.png" fluid />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/borderline-arts"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <Image src="../BorderlineArts_Main.png" fluid />
          </Link>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ProjectsCarousel;
