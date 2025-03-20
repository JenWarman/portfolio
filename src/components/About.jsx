import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center p-2">
        <Col xs={12} md={6}>
          <h1 className="about-title display-2 text-wrap fw-bold lh-base text-black">
            About Me
          </h1>
          <h5 className="about-text text-wrap fs-4 fw-normal lh-base text-black">
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
        <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
          <Image src="../profile.jpg" fluid className="pt-3 pb-3 hero-image"/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
