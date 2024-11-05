import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container className="about-section">
      <Row className="about-row">
        <Col xs={8} md={4}>
          <h1 className="about-title">About Me</h1>
          <h5 className="about-text">
            Hi, I’m Jen, a UI/UX designer currently based in Nottingham, UK and
            have been designing for over 13 years.<br></br>
            <br></br>With a background in surface pattern design I more recently
            embarked on a career in UI/UX design and Software Development. While
            living in Berlin, Germany I volunteered as a web administrator for
            the Berlin Kreativ Kollektiv, and since returning to the UK I began
            volunteering as website manager for Borderline Arts. I wanted to
            deepen my understanding of web applications, which led me to
            completing a 13 week Software Development bootcamp at Northcoders.
            <br></br>
            <br></br>Now I continue to expand my design knowledge and utilise my
            improved technical and interpersonal skills to create engaging
            digital design solutions.
          </h5>
        </Col>
        <Col xs={8} md={5}>
          <Image src="../profile.jpg" rounded fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
