import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function HeroBar() {
  return (
    <Container className="pt-2 pt-3">
      <Row className="d-flex flex-row mb-3 justify-content-center align-items-center">
        <Col className="slide-right ">
          <h1 id="designer" className="display-1 hero-sub-header text-wrap fw-bold lh-base text-black text-center" >
            Designer
          </h1>
          <h5 className="hero-sub-header text-wrap fs-3 fw-normal lh-base text-black text-justify">
            UI/UX design for engaging and functional digital experiences.
          </h5>
        </Col>
        <Col>
          <Image className="profile-image" src="../profileBG.png" />
        </Col>
        <Col className="slide-left">
          <h1 className="display-1 hero-sub-header text-wrap fw-bold lh-base text-black text-center">Developer</h1>
          <h5 className="hero-sub-header text-wrap fs-3 fw-normal lh-base text-black">
            Frontend web development with solid and scalable code.
          </h5>
        </Col>
        <Row>
          <Col>
            <h1 className="media-hero-header">Designer & Developer</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="media-hero-sub-header">
              Engaging and functional UI/UX design for digital experiences and
              frontend web development with solid and scalable code.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default HeroBar;
