import { Container, Row, Col, Button, Image } from "react-bootstrap";

function ByteSizeHabits() {
    return (
        <>
        <Container classname='byte-size-habits'>
          <Row>
            <Col className='byte-size-col'xs={4} md={4}>
            <h1 className="byte-size-title">Byte Size Habits</h1>
            <p className="byte-size-intro">Byte Size Habits is a modern web application designed to help users track their daily habits and personal goals, with a playful, Tamagotchi-style interface. Created using React, Next.js, and styled with TailwindCSS and DaisyUI, the app allows users to set goals, track progress, and interact with a cute, tech-themed character.</p>
            <h3 className="byte-size-sub-header">Project</h3>
            <p className="byte-size-intro">Final group project for Northcoders bootcamp.</p>
            <h3 className="byte-size-sub-header">Role</h3>
            <p className="byte-size-intro">Full stack software developer</p>
            </Col>
            <Col xs={8} md={8}>
            <Image classname='byte-size-group-image'src='../ByteSizeGroupCropped.png'fluid />
            </Col>
          </Row>
          <Row>
            <Col><h1 className="byte-size-sub-header">Objectives</h1>
            <ul>
              <li className="byte-size-intro"></li>
              <li className="byte-size-intro"></li>
              <li className="byte-size-intro"></li>
              </ul>
            </Col>
          </Row>
        </Container>
  </>
    )
}

export default ByteSizeHabits;


