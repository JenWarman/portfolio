import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function DesignProjects() {
    return (
        <>
        <Container className="design-projects">
        <Row>
            <Col>
            <h1 className="project-header">Projects</h1>
            <h2 className='UIUX-projects-title'>UI/UX Design</h2>
            </Col>
        </Row>
        
        <Row className="project-info">
      <Col xs={6} md={3}>
          <Link to='/book-club-app' className='recent-projects-link'><h2 className='projects-title'>Book Club App</h2></Link>
          <p className='projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Link to='/book-club-app'><Button className='project-button' variant="outline-dark">Project</Button></Link>
        <Link><Image className="project-icon" src='../domain.png'/></Link>
        <Link><Image className="project-icon" src='../github.png'/></Link>
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
          <Button className='project-button' variant="outline-dark">Project</Button>
        <Link><Image className="project-icon" src='../domain.png'/></Link>
        <Link><Image className="project-icon" src='../github.png'/></Link>
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
          <Button className='project-button' variant="outline-dark">Project</Button>
        <Link><Image className="project-icon" src='../domain.png'/></Link>
        <Link><Image className="project-icon" src='../github.png'/></Link>
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
      </Container>
        </>
    )
}

export default DesignProjects;