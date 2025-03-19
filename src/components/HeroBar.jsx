import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function HeroBar() {
  return (
    <Container>
      <Row className="align-items-stretch pb-5">
        <Col className="align-items-center m-auto">
          <Col>
            <h1 className="hero-title display-2 text-wrap fw-bold text-black pb-1 pt-1 ">
              designer & developer
            </h1>
          </Col>
          <Col>
            <p className="hero-text fs-5 fw-normal lh-base text-black text-justify  pt-3 pe-5">
              Hi, I&#39;m Jen Warman. A passionate software developer creating
              digital experiences with engaging and functional UI/UX design and
              solid scalable code.
            </p>
            <div className="hero-button">
              <Link
                to="/projects"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Button className="btn btn-outline-dark fw-bolder bg-transparent fs-6 border-3 mt-3">
                  See My Work
                </Button>
              </Link>
            </div>
          </Col>
        </Col>
        <Col xs="auto" className="d-flex flex-column justify-content-center">
          <Image
            src="../profileBG.png"
            alt="Example"
            style={{ borderRadius: "50%" }}
            className="hero-image"
          />
        </Col>
        <Row xs="auto" className="d-flex flex-row hero-links align-self-end">
          <Link target="_blank" className="text-black fs-5" href="https://www.linkedin.com/in/jen-warman-38198a172/">
            LinkedIn /
          </Link>
          <Link target="_blank" className="text-black fs-5" href="https://github.com/JenWarman">
            Github /
          </Link>
          <Link target="_blank" className="text-black fs-5" href="mailto: jen.warman85@gmail.com">
            Email /
          </Link>
        </Row>
      </Row>
    </Container>
  );
}

export default HeroBar;
