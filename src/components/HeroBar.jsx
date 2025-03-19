import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function HeroBar() {
  return (
    <Container>
      <div className='circle'>
      <Row className="align-items-stretch ">
        <Col className="align-items-center m-auto">
          <Col>
            <h1 className="display-2 text-wrap fw-bold text-black pb-1 pt-1 ">
              designer & developer
            </h1>
          </Col>
         <Col>
          <p className="fs-5 fw-normal lh-base text-black text-justify  pt-3 pe-5">
            UI/UX design for engaging and functional digital experiences.
            Engaging and functional UI/UX design for digital experiences and
            frontend web development with solid and scalable code.
          </p>
          <Button variant="outline-dark" className='fs-5 fw-3'>see my work</Button>
          </Col>
        </Col>
        <Col xs="auto" className="d-flex flex-column justify-content-center">
          <Image src="../profileBG.png" alt="Example" />
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default HeroBar;
