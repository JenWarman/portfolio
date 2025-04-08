import { Container, Row, Image } from "react-bootstrap";
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
            <h1 className=" display-6 fw-bold p-2">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                to="https://www.borderlinearts.org/"
              >
                Borderline Arts
              </Link>
            </h1>
            <h5 className="about-text fs-5 text-black pb-2">
              Redesign of a local mental health charity&#39;s website as part of
              their online initiative to rebrand for their 10 year anniversary.
              <br></br>
              <br></br>
              In addition to enhancing the branding of the website the redesign
              focussed on accessibility and improving the user experience which
              was achieved by streamlined navigation, call to action buttons and
              engaging UI design.
            </h5>
          </Row>
        </Row>

        <Row className="justify-content-center">
          <Row>
            <Row className="project-info">
              <h2 className="fs-4 fw-bold">Project</h2>
              <h5 className="fs-5 text-black pb-2">
                Redesign a local mental health charity&#39;s website with a
                strong focus on accessibility, ease of use and updated branding.
              </h5>
            </Row>
            <Row className="project-info">
              <h2 className="fs-4 fw-bold">Role</h2>
              <h5 className="fs-5 text-black pb-2">
                Project managment, UX design and frontend development. 
              </h5>
            </Row>
            <Row className="project-info">
              <h2 className="fs-4 fw-bold">Tech Stack</h2>
              <h5 className="fs-5 text-black pb-2">
                Wix Content Managment System and Wave. 
              </h5>
            </Row>
          </Row>
        </Row>
        <Row className="p-3">
          <h2 className="fs-4 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
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
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Rebrand.</strong> A vibrant colour palette, dynamic
                  layout, energetic graphics and character design create a bold
                  brand identity.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
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
