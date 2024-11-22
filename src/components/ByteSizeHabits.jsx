import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ByteSizeHabits() {
  return (
    <>
      <Container classname="byte-size-habits">
        <Row className="byte-size-row">
          <Col className="byte-size-col" xs={11} md={4}>
            <h1 className="byte-size-title">
              <Link
                className="recent-projects-link"
                to="https://byte-size-habits.vercel.app/"
              >
                Byte Size Habits
              </Link>
            </h1>
            <h5 className="byte-size-intro">
              <Link
                className="recent-projects-link"
                to="https://github.com/DannyGreenan/byte-size-habits"
              >
                <strong>Byte Size Habits</strong>
              </Link>{" "}
              is a habit tracker web application specifically designed to help
              users learn how to code and improve their programming skills.
              <br></br>
              <br></br>The user can set personal learning goals, duration to
              study each day and track their progress all with the help of a
              Tamagotchi-style digital pet called Nibbler. Nibbler can offer the
              user useful resources on your chosen topic of study and provide
              timed sessions to help the user fulfil their daily study target.
              <br></br>
              <br></br>This application was created using Javascript, React,
              Next.js, Supabase, Tailwind CSS, Daisy UI and Chart.js.
            </h5>
          </Col>
          <Col xs={11} md={8}>
            <Image
              classname="byte-size-group-image"
              src="../ByteSizeGroupCropped.png"
              fluid
            />
          </Col>
        </Row>
        <Row className="byte-size-row">
          <Col xs={11} md={4}>
            <h2 className="byte-size-sub-header">Project</h2>
            <h5 className="byte-size-intro">
              Final group project for{" "}
              <Link
                className="recent-projects-link"
                to="https://northcoders.com/project-phase/byte-size-habits"
              >
                <strong>Northcoders</strong>
              </Link>{" "}
              bootcamp.
            </h5>
            <h2 className="byte-size-sub-header">Role</h2>
            <h5 className="byte-size-intro">Full stack software developer</h5>
            <h2 className="byte-size-sub-header">Tech Stack</h2>
            <ul>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>JavaScript</span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>Next.js</span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>Supabase</span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>Tailwind CSS</span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>Daisy UI</span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>Chart.js</span>
                </h5>
              </li>
            </ul>
          </Col>
          <Col id="byte-size-desktop-image" xs={11} md={8}>
            <Image
              classname="byte-size-group-image"
              src="../BytseSizeBrowser1Cropped.png"
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
                    <strong>Set personal goals.</strong> The user can select a
                    programming language to learn and set a daily target to
                    study, for example 30 minutes per day.{" "}
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Motivate the user.</strong> Nibbler's health
                    decreases over time and the only way to restore him to full
                    charge is for the user to complete their daily learning
                    objective.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong>Reward the user. </strong> When the user completes a
                    study session they are awarded coins in addition to
                    restoring Nibbler’s health. These coins can be redeemed in
                    store to treat your virtual pet.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-list">
                  <span>
                    <strong> Track progress.</strong>The user can track their
                    progress and compare their weekly or monthly streak.
                  </span>
                </h5>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="wireframe-container" fluid bg="dark">
        <Container className="inner-wireframe-container">
          <Row>
            <h2 id="wireframe-header">Wireframes</h2>
          </Row>
          <Row className="byte-size-wireframe-row">
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe1.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe2.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe3.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe4.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe5.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe6.png" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="youtube-container">
        <Row className="youtube-row">
          <Col className="youtube-col">
            <iframe
              src="https://www.youtube.com/embed/WPAtkq1zvKI?si=ie-yvSHupAOpQSYC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ByteSizeHabits;
