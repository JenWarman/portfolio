import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function BorderlineArts() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Row className="pb-3 pt-3">
            <Image src="../../BorderlineArts_Main.png" fluid />
          </Row>
          <Row>
            <h1 className="text-center display-2 fw-bold p-3">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://www.borderlinearts.org/"
              >
                Borderline Arts
              </Link>
            </h1>
            <h5 className="about-text fs-3 text-black pb-3">
              Redesign of a local mental health charity&#39;s website as part of
              their online initiative to rebrand for their 10 year anniversary.
              The redesign focussed on two key areas, rebranding and updating
              the design of the website but to also improve accessibility and
              ease of information. This was achieved using Wix&#39;s
              customisable website builder and Content Management Software in
              addition to Wave to ensure high accessibility standards.
            </h5>
          </Row>
        </Row>

        <Row className="justify-content-center">
          <Row>
            <Col className="project-info">
             
                <h2 className="display-8 fw-bold">Project</h2>
                <h5 className="fs-3 text-black pb-3">
                  Redesign a local mental health charity&#39;s website with a
                  strong focus on accessibility, ease of use and updated
                  branding.
                </h5>
           
            </Col>
            <Col className="project-info">
              <h2 className="display-8 fw-bold">Role</h2>
              <h5 className="fs-3 text-black pb-3">
                UI/UX design and web development.
              </h5>
            </Col>
          </Row>
        </Row>
        <Row className="p-3">
          <h2 className="display-8 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Accessibility.</strong> The contents of the website is
                  simplified and streamlined with improved navigation, including
                  call to action buttons and page anchors so the user can easily
                  locate vital information such as medical or emergency
                  contacts.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Rebrand.</strong> A vibrant colour palette, dynamic
                  layout, energetic graphics and character design create a bold
                  brand identity.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Maintainable. </strong>Created using Wix the website
                  is easy to maintain by volunteer staff.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  );
}

export default BorderlineArts;
