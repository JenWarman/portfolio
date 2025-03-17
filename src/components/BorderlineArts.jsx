import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function BorderlineArts() {
  return (
    <>
      <Container classname="byte-size-habits">
        <Row className="byte-size-row">
          <Col className="byte-size-col" xs={11} md={4}>
            <h1 className="borderline-title">
              <Link
              target="_blank"
                className="recent-projects-link"
                to="https://www.borderlinearts.org/"
              >
                Borderline Arts
              </Link>
            </h1>
            <h5 className="borderline-intro">
              <Link
              target="_blank"
                className="recent-projects-link"
                to="https://www.borderlinearts.org/"
              >
                <strong></strong>
              </Link>
              Redesign of a local mental health charity’s website as part of
              their online initiative to rebrand for their 10 year anniversary.
              <br></br>
              <br></br>
              The redesign focussed on two key areas, rebranding and updating
              the design of the website but to also improve accessibility and
              ease of information. This was achieved using Wix’s customisable
              website builder and Content Management Software in addition to
              Wave to ensure high accessibility standards.
            </h5>
          </Col>
          <Col xs={11} md={8}>
            <Image
              classname="byte-size-group-image"
              src="../BorderlineArts.png"
              fluid
            />
          </Col>
        </Row>
        <Row className="byte-size-row">
          <Col xs={11} md={3}>
            <h2 className="borderline-sub-header">Project</h2>
            <h5 id="borderline-project-type" className="borderline-intro">
              Volunteer position.
            </h5>
          </Col>
          <Col xs={11} md={9}>
            <h2 className="borderline-sub-header">Role</h2>
            <h5 id="borderline-intro" className="borderline-intro">
              UI/UX design and web development.
            </h5>
          </Col>
        </Row>
        <Row className="borderline-row">
          <Col xs={11} md={12} className="borderline-objectives">
            <h2 className="borderline-sub-header">Objectives</h2>
            <ul>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Accessibility.</strong> The contents of the website
                    is simplified and streamlined with improved navigation,
                    including call to action buttons and page anchors so the
                    user can easily locate vital information such as medical or
                    emergency contacts.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Rebrand.</strong> A vibrant colour palette, dynamic
                    layout, energetic graphics and character design create a
                    bold brand identity.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Maintainable. </strong>Created using Wix the website
                    is easy to maintain by volunteer staff.
                  </span>
                </h5>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BorderlineArts;
