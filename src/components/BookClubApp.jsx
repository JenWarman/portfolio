import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookClubApp() {
  return (
    <>
      <Container classname="book-club-container">
        <Row className="book-club-row">
          <Col>
            <h1 className="book-club-title">Book Club App</h1>
          </Col>
        </Row>
        <Row className="book-club-text-row">
          <Col xs={12} md={12}>
            <h4 className="book-club-intro">
              <strong>Your Book Club</strong> is an application that cultivates
              a community of book lovers and connects them with book clubs to
              share and discover new reading experiences. <br></br>
              <br></br>The user can create their own book club or search for
              open book clubs using their personalised search criteria, such as
              location, meet-up style (online or in-person), book genre or
              theme. <br></br>
              <br></br>User engagement is encouraged through access to group
              messaging, polls for future book club picks and awards for book
              club participation and completing reading challenges.
            </h4>
          </Col>
        </Row>
        <Row className="book-club-image-row">
          <Col xs={6} md={3}>
            <Image
              classname="book-club-group-image"
              src="../ByteSizeHabitsMobileLogin.png"
              fluid
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              classname="book-club-group-image"
              src="../ByteSizeHabitsMobileLogin.png"
              fluid
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              classname="book-club-group-image"
              src="../ByteSizeHabitsMobileLogin.png"
              fluid
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              classname="book-club-group-image"
              src="../ByteSizeHabitsMobileLogin.png"
              fluid
            />
          </Col>
        </Row>
        <Row className="book-club-text-row">
          <Col xs={6} md={6}>
            <h2 className="byte-size-sub-header">Project</h2>
            <h5 className="byte-size-intro">Self-initiated</h5>
          </Col>
          <Col xs={6} md={6}>
            <h2 className="byte-size-sub-header">Role</h2>
            <h5 className="byte-size-intro">UI/UX Designer</h5>
          </Col>
        </Row>
        <Row className="book-club-text-row">
          <Col xs={12} md={12} className="byte-size-objectives">
            <h2 className="byte-size-sub-header">Objectives</h2>
            <ul>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Cultivate connection.</strong> Your Book Club allows
                    the user to create their own book club or join an existing
                    one, nurturing connections between book lovers and allowing
                    them to share their reading experiences.{" "}
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Simplify and facilitate. </strong> This app provides
                    group messaging for book clubs to promote book discussions
                    and tools such as polls to plan future meetings.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Encourage user engagement.</strong> Your Book Club
                    not only provides a connection to a community of book lovers
                    it also rewards users with profile badges and incentives for
                    their participation in book clubs and the completion of
                    reading challenges.
                  </span>
                </h5>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="book-club-image-row">
          <Col xs={12} md={9} className="byte-size-objectives">
            <h2 className="byte-size-sub-header">Persona</h2>
            <ul>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Name: </strong> Charlotte Hughes
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Age: </strong>35
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Occupation: </strong>Marketing Manager
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Location: </strong>Birmingham
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Device: </strong>Android (Pixel 6)
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Desired Outcome: </strong>Meet new people and
                    increase personal reading goals.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Strengths: </strong>Intelligent, professional and
                    open-minded.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Weaknesses: </strong>Time management and limited
                    social circle.
                  </span>
                </h5>
              </li>
            </ul>
          </Col>
          <Col xs={10} md={3}>
            <Image src="../profile.jpg" fluid />
          </Col>
        </Row>
      </Container>

      <Container className="book-club-wireframe-container" fluid>
        <Container className="book-club-inner-wireframe-container" fluid>
          <Row className="book-club-image-row">
            <h2 id="wireframe-header">Wireframes</h2>
          </Row>
          <Row className="book-club-wireframe-row">
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Splash Screen.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Login.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Sign-up.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Home Screen -new user.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Profile - New User.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Profile - Exisiting User.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Home Screen - exisiting user.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Search.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Create.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Home Page - Member.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Creator.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Page - About.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Page - Books.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Page - Messages.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Page - Poll.png"
              />
            </Col>
            <Col xs={4} md={3}>
              <Image
                className="book-club-wireframe-image"
                src="../BookClubApp/Book Club Page - Events.png"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* <Container className="youtube-container">
              <Row className="youtube-row">
                <Col className="youtube-col">
                <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
              </Row>
          </Container> */}
    </>
  );
}

export default BookClubApp;
