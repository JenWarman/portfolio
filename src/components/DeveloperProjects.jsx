import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function DeveloperProjects() {
    return (
        <>
        <Container className="design-projects">
        <Row>
            <Col>
            <h1 className="developer-project-header">Projects</h1>
            <h2 className='developer-recent-projects-title'>Software Development</h2>
            </Col>
        </Row>
        
        <Row className="project-info">
      
        <Col className='project-image' xs={6} md={3}>
          <Image src="../ByteSizeHabitsMobileLogin.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../ByteSizeMobileChat.png"rounded fluid/>
        </Col>
        <Col className='project-image' xs={6} md={3}>
          <Image src="../ByteSizeHabitsMobileProgress.png" rounded fluid/>
        </Col>
        <Col xs={6} md={3}>
          <h2 className='developer-projects-title'>Byte Size Habits</h2>
          <p className='developer-projects-text'>Byte Size Habits is a habit tracker web application specifically designed to help users learn how to code and improve their programming skills.</p>
          <Link to='/byte-size-habits'><Button className='developer-button' variant="outline-dark">Project</Button></Link>
          <Link to='https://byte-size-habits.vercel.app/'><Image className="developer-project-icon" src='../domain.png'/></Link>
        <Link to='https://github.com/DannyGreenan/byte-size-habits'><Image className="developer-project-icon" src='../github.png'/></Link>
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
          <h2 className='developer-projects-title'>NC News</h2>
          <p className='developer-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button className='developer-button' variant="outline-dark">Project</Button>
          <Link><Image className="developer-project-icon" src='../domain.png'/></Link>
        <Link><Image className="developer-project-icon" src='../github.png'/></Link>
        </Col>
      </Row>
      </Container>
        </>
    )
}

export default DeveloperProjects;