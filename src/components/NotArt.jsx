import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotArt() {
  return (
    <>
      <Container>
        <Row>
          <Row>
            <Image src="../../NotArt/NotArt_Main.png" fluid />
          </Row>
          <Row>
            <h1 className="text-center display-2 fw-bold p-5">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://not-art.netlify.app/"
              >
                Not Art
              </Link>
            </h1>
            <h5 className="fs-3 text-black pb-5">
              Welcome to
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://github.com/JenWarman/events-platform"
              >
                <strong> Not Art </strong>
              </Link>
              a web application that allows members of Nottingham&#39;s creative
              community find events, sign up to attend and add them to their own
              personal calendar. Staff members can add, edit and delete events
              from the platform.
            </h5>
          </Row>
        </Row>
        <Row>
          <Row>
            <Col>
              <h2 className="display-8 fw-bold">Project</h2>
              <h5 className="fs-3 text-black pb-5">
                A web application for a small creative business in Nottingham to
                create and share events with their members.
              </h5>
              <h2 className="display-8 fw-bold">Role</h2>
              <h5 className="fs-3 text-black">
                Designer and frontend developer.
              </h5>
            </Col>
            <Col>
              <h2 className="display-8 fw-bold">Tech Stack</h2>
              <h5 className="fs-3 text-black">
                TypeScript, Angular, CSS and Supabase.
              </h5>
            </Col>
          </Row>
          <Row>
            <Image src="../../NotArt/NotArt_Mobile.png" fluid className="p-5" />
          </Row>
        </Row>
        <Row className="pb-5">
          <h2 className="display-8 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Engage the user.</strong> Easy search functionality
                  and access to free art and cultural events throughout
                  Nottingham.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Ease of use.</strong> The user can sign-up for a event
                  with one click and add an event to their personal calendar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Easy platform management.</strong> An admin user can
                  create, edit and delete events.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
        <Row>
          <h2 className="display-8 fw-bold">Application Features</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Event Search.</strong> All users with or without an
                  account can search for events by event type (e.g. music,
                  theatre, etc) or using the search bar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>User Login.</strong> Registered users can log in to
                  sign up for events and access these events via their profile
                  page.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Google Calendar Integration.</strong> Once a user has
                  signed up for an event they will have the option to add this
                  event to their personal calendar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-3 text-black">
                <span>
                  <strong>Staff Authorisation.</strong> Admin users can manage
                  events by adding new events, editing event details and
                  deleting them.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  );
}
