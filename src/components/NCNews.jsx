import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NCNews() {
  return (
    <Container classname="byte-size-habits">
      <Row className="byte-size-row">
        <Col className="byte-size-col" xs={11} md={4}>
          <Link
            target="_blank"
            className="recent-projects-link"
            to="https://github.com/JenWarman/nc-news-react-app"
          >
            <h1 className="byte-size-title">NC News</h1>
          </Link>
          <h5 className="byte-size-intro">
            <Link
              target="_blank"
              className="recent-projects-link"
              to="https://github.com/JenWarman/nc-news-react-app"
            >
              <strong>NC News</strong>
            </Link>
            is a social news platform that allows the user to fetch news
            articles based on a search criteria, post comments and like
            articles.
            <br></br>
            <br></br>This project has a RESTful API backend built with Express
            and PostgreSQL. The frontend of the project was created using React,
            HTML, and a Bootstrap CSS framework.
          </h5>
        </Col>
        <Col xs={11} md={8}>
          <Image classname="byte-size-group-image" src="../NCNews.png" fluid />
        </Col>
      </Row>
      <Row className="byte-size-row">
        <Col xs={11} md={4}>
          <h2 className="byte-size-sub-header">Project</h2>
          <h5 className="byte-size-intro">
            Fullstack project for part of the Northcoders Software Development bootcamp.
          </h5>
          <h2 className="byte-size-sub-header">Role</h2>
          <h5 className="byte-size-intro">Full stack software developer.</h5>
          <h2 className="byte-size-sub-header">Tech Stack</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>JavaScript</span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>React</span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>HTML</span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>CSS</span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>PostgreSQL</span>
              </h5>
            </li>
          </ul>
        </Col>
        <Col xs={11} md={8}>
          <Image
            classname="byte-size-group-image"
            src="../NCNEWS_COMMENTS.png"
            fluid
          />
        </Col>
      </Row>
      <Row className="byte-size-row">
        <Col xs={11} md={11} className="byte-size-objectives">
          <h2 className="byte-size-sub-header">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>
                  <strong>Backend.</strong> This project uses PostgreSQL to
                  manage new articles, user information and comments with the
                  use of a RESTful API backend.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>
                  <strong>Frontend.</strong> React was used to create a
                  responsive user interface with Bootstrap styled components.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="byte-size-list">
                <span>
                  <strong>User Experience. </strong> NC News allows the user to
                  login in, post their own comments and like articles.
                </span>
              </h5>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
