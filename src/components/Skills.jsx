import { Collapse } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
    <Container className='skills'>
      <Row>
      <h2 className='skills-title'>Design</h2>
      </Row>
      <Row className='skills-row'>
        <Col xs={4} md={2} >
        <div className='skills-circle' id='figma'>Figma</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='adobe'>Adobe Photoshop</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='javascript'>Adobe Illustrator</div>
        </Col>
        {/* <Col xs={4} md={2} >
          <div className='skills-circle' id='html'>HTML</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='css'>CSS</div>
        </Col> */}
        </Row>
        <Row>
      <h2 className='skills-title' id='development-skills-title'>Development</h2>
      </Row>
        <Row className='skills-row'>
        <Col xs={4} md={2} >
        <div className='skills-circle' id='figma'>JavaScript</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='adobe'>HTML</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='javascript'>CSS</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='html'>React.js</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='css'>Next.js</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='figma'>SQL</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='adobe'>PostgreSQL</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='javascript'>Jest</div>
        </Col>
        <Col xs={4} md={2} >
          <div className='skills-circle' id='html'>SuperTest</div>
        </Col>
        </Row>
    </Container>
  );
}

export default Skills;