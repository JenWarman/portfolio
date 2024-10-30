import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function RecentProjects() {
  return (
    <Container className="recent-projects">
      <Row>
      <Col xs={5} md={3}>
          <h2 className='recent-projects-title'>Recent Projects</h2>
          <p className='recent-projects-text'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          <Button variant="outline-dark">Project</Button>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../ByteSize1.png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../ByteSize2 (1).png" rounded fluid/>
        </Col>
        <Col className='project-image' xs={5} md={3}>
          <Image src="../ByteSize3.png" rounded fluid/>
        </Col>
      </Row>
    </Container>
  );
}

export default RecentProjects;