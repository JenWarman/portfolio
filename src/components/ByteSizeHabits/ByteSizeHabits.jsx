import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ByteSizeWireFrames from "./ByteSizeWireFrames";
import ByteSizeHabitsDemo from "./ByteSizeHabitsDemo";

function ByteSizeHabits() {
  return (
    <>
      <Container classname="byte-size-habits">
        <Row className="byte-size-row">
        <Row>
            <Image src="../../ByteSizeHabits/ByteSizeHabits_Main.png" fluid/>
          </Row>
          <Row>
            <h1 className="text-center display-2 fw-bold p-5">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://github.com/DannyGreenan/byte-size-habits"
              >Byte Size Habits</Link>
            </h1>
            <h5 className="byte-size-intro fs-3 text-black">
              <Link
                target="_blank"
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://github.com/DannyGreenan/byte-size-habits">
                <strong>Byte Size Habits </strong></Link>
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
          </Row>
          
        </Row>
        <Row className="byte-size-row">
          <Row>
            <Col>
            <h2 className="display-8 fw-bold">Project</h2>
            <h5 className="byte-size-intro fs-3 text-black">Final group project for
              <Link
                className="link-opacity-25-hover link-offset-2 link-underline link-underline-opacity-0 link-dark"
                to="https://northcoders.com/project-phase/byte-size-habits" target="_blank">
                <strong>Northcoders</strong>
              </Link>bootcamp.</h5>
            <h2 className="display-8 fw-bold">Role</h2>
            <h5 className="byte-size-intro fs-3 text-black">Full stack software developer.</h5>
            </Col>
            <Col>
            <h2 className="display-8 fw-bold">Tech Stack</h2>
            <h5 className="byte-size-intro fs-3 text-black">JavaScript, Next.js, Supabase, Tailwind CSS, Daisy UI and Chart.js.</h5>
            </Col>
          </Row>
          <Row>
            <Image src="../../ByteSizeHabits/ByteSizeFullScreen.png" fluid/>
          </Row>
        </Row>
        <Row className="byte-size-row">
            <h2 className="display-8 fw-bold">Objectives</h2>
            <ul>
              <li className="byte-size-list">
                <h5 className="byte-size-intro fs-3 text-black">
                  <span>
                    <strong>Set personal goals.</strong> The user can select a
                    programming language to learn and set a daily target to
                    study, for example 30 minutes per day.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-intro fs-3 text-black">
                  <span>
                    <strong>Motivate the user.</strong> Nibbler&#39;s health
                    decreases over time and the only way to restore him to full
                    charge is for the user to complete their daily learning
                    objective.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-intro fs-3 text-black">
                  <span>
                    <strong>Reward the user. </strong> When the user completes a
                    study session they are awarded coins in addition to
                    restoring Nibbler&#39;s health. These coins can be redeemed in
                    store to treat your virtual pet.
                  </span>
                </h5>
              </li>
              <li className="byte-size-list">
                <h5 className="byte-size-intro fs-3 text-black">
                  <span>
                    <strong> Track progress.</strong>The user can track their
                    progress and compare their weekly or monthly streak.
                  </span>
                </h5>
              </li>
            </ul>
        </Row>
      </Container>
      <ByteSizeWireFrames/>
      <ByteSizeHabitsDemo/>
    </>
  );
}

export default ByteSizeHabits;
