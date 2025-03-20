import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 fw-bold pt-2">Projects</h1>
          </Col>
        </Row>
        <Row className="project-row">
          <Col xs={12} md={4} className="project-col">
            <Link
              to="/not-art"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
            >
              <h2 className="fs-2 text-black fw-bolder">Not Art</h2>
            </Link>
            <p className="fs-4 text-black">
              A web application bringing Nottingham&#39;s creative community
              together, allowing the user to search for and sign up for art and
              cultural events in their area.
            </p>
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
              <Button className="btn btn-outline-dark fw-bolder bg-transparent fs-6 border-3">
                See Project Details
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <Image
              className="project-image"
              src="../../NotArt/NotArt_Main.png"
              fluid
            />
          </Col>
        </Row>
        <Row className="project-row">
          <Col xs={12} md={4}>
            <Link
              to="/byte-size-habits"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
            >
              <h2 className="fs-2 text-black fw-bolder">Byte Size Habits</h2>
            </Link>
            <p className="fs-4 text-black">
              Byte Size Habits is a habit tracker web application specifically
              designed to help users learn how to code and improve their
              programming skills.
            </p>
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
              <Button className="btn btn-outline-dark fw-bolder bg-transparent fs-6 border-3">
                See Project Details
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <Image
              className="project-image"
              src="../../ByteSizeHabits/ByteSizeHabits_Main.png"
              fluid
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col xs={12} md={4}>
            <Link
              to="/ncnews"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
            >
              <h2 className="fs-2 text-black fw-bolder">NC News</h2>
            </Link>
            <p className="fs-4 text-black">
              A social news aggregation, web content rating and discussion
              website.
            </p>
            <Link
              to="/ncnews"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Button className="btn btn-outline-dark fw-bolder bg-transparent fs-6 border-3">
                See Project Details
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <Image className="project-image" src="../NCNews_Main.png" fluid />
          </Col>
        </Row>

        <Row className="project-row">
          <Col xs={12} md={4}>
            <Link
              to="/borderline-arts"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
            >
              <h2 className="fs-2 text-black fw-bolder">Borderline Arts</h2>
            </Link>
            <p className="fs-4 text-black">
              Redesign of a local mental health charity&#39;s website as part of
              their online initiative to rebrand for their 10 year anniversary.
            </p>
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
              <Button className="btn btn-outline-dark fw-bolder bg-transparent fs-6 border-3">
                See Project Details
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <Image
              className="project-image"
              src="../BorderlineArts_Main.png"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
