import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function DeveloperProjects() {
    return (
        <>
        <div className='bottom-diagonal-box'></div> 
        <div className="content">
        <Container className="design-projects">
        <Row>
            <Col>
            <h1 className="developer-project-header">Projects</h1>
            <h2 className='developer-recent-projects-title'>Software Development</h2>
            </Col>
        </Row>
        
        <Row className="project-info">
      
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col xs={6} md={3}>
          <h2 className='developer-projects-title'>Project Name</h2>
          <p className='developer-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button className='developer-button' variant="outline-dark">Project</Button>
          <Link><Image className="developer-project-icon" src='../domain.png'/></Link>
        <Link><Image className="developer-project-icon" src='../github.png'/></Link>
        </Col>
      </Row>

      <Row className="project-info">
      
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../iPhone.png" rounded fluid/>
        </Col>
        <Col xs={6} md={3}>
          <h2 className='developer-projects-title'>Project Name</h2>
          <p className='developer-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button className='developer-button' variant="outline-dark">Project</Button>
          <Link><Image className="developer-project-icon" src='../domain.png'/></Link>
        <Link><Image className="developer-project-icon" src='../github.png'/></Link>
        </Col>
      </Row>
      </Container>
        </div>
        </>
    )
}

export default DeveloperProjects;