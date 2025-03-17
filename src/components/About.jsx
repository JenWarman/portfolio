import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container className="about-section">
      <Row className="about-row d-flex justify-content-center align-items-center p-2">
        <Col className="about-text-section" xs={10} md={5}>
          <h1 className="about-title display-1 text-wrap fw-bold lh-base text-black">About Me</h1>
          <h5 className="about-text text-wrap fs-5 fw-normal lh-base text-black">
            Hi, I&#39;m Jen, a passionate software developer with a diverse
            background in both creative and technical fields. <br></br>
            <br></br>My journey into the world of web development began in
            Berlin, where I volunteered as a web administrator for the Berlin
            Kreativ Kollektiv. This experience sparked my interest in web
            applications and led me to pursue further opportunities in the
            field, including my current role as a website manager for Borderline
            Arts, a UK-based mental health charity.<br></br>
            <br></br>Seeking to deepen my technical knowledge, I completed a
            13-week Software Development bootcamp at Northcoders, where I honed
            my technical skills to cover both front-end and back-end development
            and now, I look forward to applying my skills and continue to grow
            as a developer, collaborating with others, and making a positive
            impact through technology.
          </h5>
        </Col>
        <Col xs={10} md={5}>
          <Image src="../profile.jpg" rounded fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
