import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Container className="design-projects">
        <Row>
          <Col>
            <h1 className="project-header">Projects</h1>
          </Col>
        </Row>
        <Row className="project-info">
          <Col xs={6} md={3}>
            <Link to="/byte-size-habits" className="recent-projects-link">
              {" "}
              <h2 className="projects-title">Byte Size Habits</h2>
            </Link>
            <p className="projects-text">
              Byte Size Habits is a habit tracker web application specifically
              designed to help users learn how to code and improve their
              programming skills.
            </p>
            <Link to="/byte-size-habits">
              <Button className="project-button" variant="outline-dark">
                Project
              </Button>
            </Link>
            <Link to="https://byte-size-habits.vercel.app/">
              <Image className="project-icon" src="../domain.png" />
            </Link>
            <Link to="https://github.com/DannyGreenan/byte-size-habits">
              <Image className="project-icon" src="../github-mark.png" />
            </Link>
          </Col>
          <Col className="project-image" xs={6} md={3}>
            <Image src="../ByteSizeHabitsMobileLogin.png" rounded fluid />
          </Col>
          <Col className="project-image" xs={6} md={3}>
            <Image src="../ByteSizeMobileChat.png" rounded fluid />
          </Col>
          <Col className="project-image" xs={6} md={3}>
            <Image src="../ByteSizeHabitsMobileProgress.png" rounded fluid />
          </Col>
        </Row>

        <Row className="project-info">
          <Col id="borderline-text-box" xs={12} md={3}>
            <Link to="/ncnews" className="recent-projects-link">
              <h2 id="borderline-header" className="projects-title">
                NC News
              </h2>
            </Link>
            <p className="projects-text">
              A social news aggregation, web content rating and discussion
              website.
            </p>
            <Link to="/ncnews">
              <Button className="project-button" variant="outline-dark">
                Project
              </Button>
            </Link>
            <Link to="https://github.com/JenWarman/nc-news-react-app">
              <Image className="project-icon" src="../github-mark.png" />
            </Link>
          </Col>
          <Col className="project-image" xs={12} md={9}>
            <Image id="borderline-image" src="../NCNews.png" fluid />
          </Col>
        </Row>

        <Row className="project-info">
          <Col id="borderline-text-box" xs={12} md={3}>
            <Link to="/borderline-arts" className="recent-projects-link">
              <h2 id="borderline-header" className="projects-title">
                Borderline Arts
              </h2>
            </Link>
            <p className="projects-text">
              Redesign of a local mental health charity’s website as part of
              their online initiative to rebrand for their 10 year anniversary.{" "}
            </p>
            <Link to="/borderline-arts">
              <Button className="project-button" variant="outline-dark">
                Project
              </Button>
            </Link>
            <Link to="https://www.borderlinearts.org/">
              <Image className="project-icon" src="../domain.png" />
            </Link>
          </Col>
          <Col className="project-image" xs={12} md={9}>
            <Image
              id="borderline-image"
              src="../BorderlineArtsHomepage.png"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
