import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function HeroBar() {
  return (
    <Container>
      <Row className="align-items-stretch py-5">
        <Col className="align-items-center m-auto p-1">
          <Col>
            <h1 className="display-1 text-wrap fw-bold text-black pb-1 pt-1 text-center">
              Designer & Developer
            </h1>
          </Col>
          <Col></Col>
          <p className="fs-3 fw-normal lh-base text-black text-justify align-text-center pt-3 ps-5 pe-5">
            UI/UX design for engaging and functional digital experiences.
            Engaging and functional UI/UX design for digital experiences and
            frontend web development with solid and scalable code.
          </p>
        </Col>
        <Col xs="auto" className="d-flex flex-column justify-content-center">
          <Image src="../profileBG.png" alt="Example" />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroBar;
