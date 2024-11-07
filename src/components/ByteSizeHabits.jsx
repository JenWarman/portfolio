import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ByteSizeHabits() {
    return (
        <>
        <Container classname='byte-size-habits'>
          <Row>
            <Col className='byte-size-col'xs={4} md={4}>
            <h1 className="byte-size-title"><Link className='recent-projects-link'to='https://byte-size-habits.vercel.app/'>Byte Size Habits</Link></h1>
            <h5 className="byte-size-intro">Byte Size Habits is a modern web application designed to help users track their daily habits and personal goals, with a playful, Tamagotchi-style interface. <br></br><br></br>Created using React, Next.js, and styled with TailwindCSS and DaisyUI, the app allows users to set goals, track progress, and interact with a cute, tech-themed character.</h5>
            </Col>
            <Col xs={8} md={8}>
            <Image classname='byte-size-group-image'src='../ByteSizeGroupCropped.png'fluid />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
            <h2 className="byte-size-sub-header">Project</h2>
            <h5 className="byte-size-intro">Final group project for Northcoders bootcamp.</h5>
            <h2 className="byte-size-sub-header">Role</h2>
            <h5 className="byte-size-intro">Full stack software developer</h5>
            <h2 className="byte-size-sub-header">Objectives</h2>
            <ul>
              <li className="byte-size-list"></li>
              <li className="byte-size-list"></li>
            </ul>
            </Col>
            <Col xs={6} md={6}><h2 className="byte-size-sub-header">Tech Stack</h2>
            <ul>
              <li className="byte-size-list"></li>
              <li className="byte-size-list"></li>
            </ul></Col>
          </Row>
          </Container>

          <Container className='wireframe-container' fluid>
            <Container className="inner-wireframe-container">
            <Row>
              <h2 id='wireframe-header'>Wireframes</h2>
            </Row>
          <Row className="byte-size-wireframe-row">
            <Col xs={2} md={4}>
            <Image className="wireframe-image" src='../wireframe1.png'/>
            </Col>
            <Col xs={2} md={4}>
            <Image className="wireframe-image" src='../wireframe2.png'/>
            </Col>
            <Col xs={2} md={4}>
            <Image className="wireframe-image"  src='../wireframe3.png'/>
            </Col>
            <Col xs={2} md={4}>
            <Image className="wireframe-image" src='../wireframe4.png'/>
            </Col>
            <Col xs={2} md={4}>
            <Image className="wireframe-image" src='../wireframe5.png'/>
            </Col>
            <Col xs={2} md={4}>
            <Image className="wireframe-image" src='../wireframe6.png'/>
            </Col>
          </Row>
          </Container>
          </Container> 
        
  </>
    )
}

export default ByteSizeHabits;


