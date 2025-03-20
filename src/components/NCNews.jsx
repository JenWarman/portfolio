import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NCNews() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Row className="pb-3 pt-3">
            <Image src="../../NCNews_Main.png" fluid />
          </Row>
          <Row>
            <h1 className="text-center display-2 fw-bold p-3">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://github.com/JenWarman/nc-news-react-app"
              >
                NC News
              </Link>
            </h1>
            <h5 className="about-text fs-3 text-black pb-3">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://github.com/JenWarman/nc-news-react-app"
              >
                <strong>NC News </strong>
              </Link>
              is a social news platform that allows the user to fetch news
              articles based on a search criteria, post comments and like
              articles. This project has a RESTful API backend built with
              Express and PostgreSQL. The frontend of the project was created
              using React, HTML, and a Bootstrap CSS framework.
            </h5>
          </Row>
        </Row>
        <Row className="justify-content-center">
          <Row>
            <Col>
              <Row>
                <Col>
                  <h2 className="display-8 fw-bold">Project</h2>
                  <h5 className="fs-3 text-black pb-3">
                    Fullstack project for part of the Northcoders Software
                    Development bootcamp.
                  </h5>
                </Col>
                <Col className="project-info">
                  <h2 className="display-8 fw-bold">Tech Stack</h2>
                  <h5 className="fs-3 text-black pb-3">
                    JavaScript, React, CSS and PostgreSQL.
                  </h5>
                </Col>
              </Row>
              <Col className="project-info">
                <h2 className="display-8 fw-bold">Tech Stack</h2>
                <h5 className="fs-3 text-black">
                  JavaScript, React, CSS and PostgreSQL.
                </h5>
              </Col>
            </Col>
            <Col className="project-info">
              <h2 className="display-8 fw-bold pb-3">Role</h2>
              <h5 className="fs-3 text-black">
                Full stack software developer.
              </h5>
            </Col>
          </Row>
          <Row>
            <Image src="../NCNEWS_COMMENTS.png" fluid className="p-3" />
          </Row>
        </Row>
        <Row className="pb-3">
          <h2 className="display-8 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Backend.</strong> This project uses PostgreSQL to
                  manage new articles, user information and comments with the
                  use of a RESTful API backend.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Frontend.</strong> React was used to create a
                  responsive user interface with Bootstrap styled components.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>User Experience. </strong> NC News allows the user to
                  login in, post their own comments and like articles.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  );
}
