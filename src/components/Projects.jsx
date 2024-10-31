import { Col, Container, Row, Button, Image } from "react-bootstrap";

function Projects() {
    return (
        <>
        <div className='diagonal-box'></div> 
        <div className='bottom-diagonal-box'></div> 
        <div className="content">
        <Container className="design-projects">
        <Row>
            <Col>
            <h1 className="project-header">Projects</h1>
            {/* <h2 classname='project-subheading'>UI/UX Design</h2> */}
            <h2 className='recent-projects-title'>UI/UX Design</h2>
            </Col>
        </Row>
        
        <Row className="project-info">
      <Col xs={5} md={3}>
          <h2 className='recent-projects-title'>Project Name</h2>
          <p className='recent-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
      </Row>

      <Row className="project-info">
      <Col xs={5} md={3}>
          <h2 className='recent-projects-title'>Project Name</h2>
          <p className='recent-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
      </Row>

      <Row>
        <Col>
        <div>line here</div></Col>
      </Row>
      </Container>
        </div>
        </>
    )
}

export default Projects;