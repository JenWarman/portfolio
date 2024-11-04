import { Col, Container, Row, Button, Image } from "react-bootstrap";

function DesignProjects() {
    return (
        <>
        <div className='diagonal-box'></div> 
        <div className="content">
        <Container className="design-projects">
        <Row>
            <Col>
            <h1 className="project-header">Projects</h1>
            <h2 className='recent-projects-title'>UI/UX Design</h2>
            </Col>
        </Row>
        
        <Row className="project-info">
      <Col xs={6} md={3}>
          <h2 className='projects-title'>Project Name</h2>
          <p className='projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button className='project-button' variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
      </Row>

      <Row className="project-info">
      <Col xs={6} md={3}>
          <h2 className='projects-title'>Project Name</h2>
          <p className='projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
      </Row>

      <Row className="project-info">
      <Col xs={6} md={3}>
          <h2 className='projects-title'>Project Name</h2>
          <p className='projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
      </Row>

      <Row>
        <Col>
        <div className="divider"></div></Col>
      </Row>
      </Container>
        </div>
        </>
    )
}

export default DesignProjects;