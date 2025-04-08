import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotArt() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Row className="pb-3 pt-3">
            <Image src="../../NotArt/NotArt_Main.png" fluid />
          </Row>
          <Row>
            <h1 className="display-6 fw-bold p-2">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                to="https://not-art.netlify.app/"
              >
                Not Art
              </Link>
            </h1>
            <h5 className="about-text fs-5 text-black pb-2">
              Welcome to
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                to="https://github.com/JenWarman/events-platform"
              >
                <strong> Not Art </strong>
              </Link>
              a responsive web application for Nottingham&#39;s creative
              community allowing members to search events, sign up to attend and
              add them to their own personal calendar. Staff members can also
              manage events by adding, editing and deleting events from the
              platform.
            </h5>
          </Row>
        </Row>
        <Row className="justify-content-center">
          <Row>
            <Col>
              <Row>
                <Row className="project-info">
                  <h2 className="fs-4 fw-bold">Project</h2>
                  <h5 className="fs-5 text-black pb-2">
                    A full stack web application for a creative business based
                    in Nottingham to help manage and share events with their
                    community members.
                  </h5>
                </Row>
                <Row className="project-info">
                  <h2 className="fs-4 fw-bold">Tech Stack</h2>
                  <h5 className="fs-5 text-black pb-2">
                    TypeScript, Angular, CSS and Supabase.
                  </h5>
                </Row>
              </Row>
              <Row className="project-info">
                <h2 className="fs-4 fw-bold">Role</h2>
                <h5 className="fs-5 text-black pb-2">
                  Freelance Project Consultant responsible for UX/UI design and
                  full stack software development.
                </h5>
              </Row>
            </Col>
          </Row>
          <Row>
            <Image src="../../NotArt/NotArt_Mobile.png" fluid className="p-3" />
          </Row>
        </Row>
        <Row className="p-3">
          <h2 className="fs-4 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Engage the user.</strong> Access to local art and
                  cultural events with easy search functionality allowing the
                  user to search for events by category or keyword.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Ease of use.</strong> The user can sign-up to attend
                  an event with a single click, edit their RSVP status via their
                  profile and add an event to their personal calendar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Event Management.</strong> The platform profides admin
                  users with event management tools, allowing them to create,
                  edit and delete events easily.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
        <Row className="p-3">
          <h2 className="fs-4 fw-bold">Application Features</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Search Functionality.</strong> All users with or without an
                  account can search for events by event type (e.g. music,
                  theatre, etc) or using a keyword search in the search bar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>User Verifcation.</strong> Registered users can log in to
                  sign up for events and access these events via their profile
                  page.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Google Calendar Integration.</strong> Once a user has
                  signed up for an event they will have the option to add this
                  event to their personal calendar.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
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
