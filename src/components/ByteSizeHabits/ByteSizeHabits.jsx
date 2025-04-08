import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ByteSizeWireFrames from "./ByteSizeWireFrames";
import ByteSizeHabitsDemo from "./ByteSizeHabitsDemo";

function ByteSizeHabits() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Row className="pb-3 pt-3">
            <Image src="../../ByteSizeHabits/ByteSizeHabits_Main.png" fluid />
          </Row>
          <Row>
            <h1 className="display-6 fw-bold p-2">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                to="https://github.com/DannyGreenan/byte-size-habits"
              >
                Byte Size Habits
              </Link>
            </h1>
            <h5 className="about-text fs-5 text-black pb-2">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                to="https://github.com/DannyGreenan/byte-size-habits"
              >
                <strong>Byte Size Habits </strong>
              </Link>
              is a habit tracker web application specifically designed to help
              users learn how to code and improve their programming skills.
              <br></br>
              <br></br>The user can set personal learning goals, duration to
              study each day and track their progress all with the help of a
              Tamagotchi-style digital pet called Nibbler. Nibbler can offer the
              user useful resources on your chosen topic of study and provide
              timed sessions to help the user fulfil their daily study target.
             
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
                Final group project for
                <Link
                  className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 text-black"
                  to="https://northcoders.com/project-phase/byte-size-habits"
                  target="_blank"
                >
                  <strong> Northcoders </strong>
                </Link>
                bootcamp.
              </h5>
              </Row>
              <Row className="project-info">
              <h2 className="fs-4 fw-bold">Tech Stack</h2>
              <h5 className="fs-5 text-black pb-2">
                JavaScript, Next.js, Supabase, Tailwind CSS, Daisy UI and
                Chart.js.
              </h5>
            </Row>
              </Row>
              <Row className="project-info">
              <h2 className="fs-4 fw-bold pb-2">Role</h2>
              <h5 className="fs-5 text-black">
                Full stack software developer.
              </h5>
              </Row>
            </Col>
            
          </Row>
          <Row>
            <Image src="../../ByteSizeHabits/ByteSizeFullScreen.png" fluid className="p-3"/>
          </Row>
        </Row>
        <Row className="p-3">
          <h2 className="fs-4 fw-bold">Objectives</h2>
          <ul>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Set personal goals.</strong> The user can select a
                  programming language to learn and set a daily target to study,
                  for example 30 minutes per day.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Motivate the user.</strong> Nibbler&#39;s health
                  decreases over time and the only way to restore him to full
                  charge is for the user to complete their daily learning
                  objective.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong>Reward the user. </strong> When the user completes a
                  study session they are awarded coins in addition to restoring
                  Nibbler&#39;s health. These coins can be redeemed in store to
                  treat your virtual pet.
                </span>
              </h5>
            </li>
            <li className="byte-size-list">
              <h5 className="fs-5 text-black">
                <span>
                  <strong> Track progress.</strong>The user can track their
                  progress and compare their weekly or monthly streak.
                </span>
              </h5>
            </li>
          </ul>
        </Row>
      </Container>
      <ByteSizeWireFrames />
      <ByteSizeHabitsDemo />
    </>
  );
}

export default ByteSizeHabits;
