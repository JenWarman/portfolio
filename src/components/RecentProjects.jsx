import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import  Link  from 'react-router-dom';

function RecentProjects() {
  return (
    <Container className="recent-projects">
      <Row className='recent-projects-row'>
      <Col xs={5} md={3}>
          <Link href='/projects'><h2 className='recent-projects-title'>Recent Projects</h2></Link>
          <p className='recent-projects-text'><Link><strong>ByteSize Habits</strong></Link> is a modern web application designed to help users track their daily habits and personal goals, with a playful, Tamagotchi-style interface. Created using React, Next.js, and styled with TailwindCSS and DaisyUI, the app allows users to set goals, track progress, and interact with a cute, tech-themed character.</p>
          <Button className='recent-projects-button' variant="outline-dark">Project</Button>
        </Col>
        <Col className='recent-project-image' xs={5} md={3}>
          <Image src="../ByteSizeHabitsMobileLogin.png" fluid/>
        </Col>
        <Col className='recent-project-image' xs={5} md={3}>
          <Image src="../ByteSizeMobileChat.png" fluid/>
        </Col>
        <Col className='recent-project-image' xs={5} md={3}>
          <Image src="../ByteSizeHabitsMobileProgress.png" fluid/>
        </Col>
      </Row>
    </Container>
  );
}

export default RecentProjects;