import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function HeroBar() {
  return (
    <Container className="hero-bar">
      <Row className="hero-row">
        <Col className="slide-right" xs={6} md={3}>
          <h1 id="designer" className="hero-header">
            Designer
          </h1>
          <h5 className="hero-sub-header">
            UI/UX design for engaging and functional digital experiences.{" "}
          </h5>
        </Col>
        <Col xs={11} md={6}>
          <Image className="profile-image" src="../profileBG.png" />
        </Col>
        <Col className="slide-left" xs={6} md={3}>
          <h1 className="hero-header">Developer</h1>
          <h5 className="hero-sub-header">
            Frontend web development with solid and scalable code.{" "}
          </h5>
        </Col>
        <Row>
          <Col xs={11}>
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
