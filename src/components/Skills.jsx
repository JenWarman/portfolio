import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
    <Container className='skills'>
      <Row className='skills-row'>
        <Col xs={2} md={2}>
        <div className='skills-circle' id='figma'>Figma</div>
        </Col>
        <Col xs={2} md={2}>
          <div className='skills-circle' id='adobe'>Adobe Creative Suite</div>
        </Col>
        <Col xs={2} md={2}>
          <div className='skills-circle' id='javascript'>JavaScript</div>
        </Col>
        <Col xs={2} md={2} >
          <div className='skills-circle' id='html'>HTML</div>
        </Col>
        <Col xs={2} md={2}>
          <div className='skills-circle' id='css'>CSS</div>
        </Col>
        </Row>
        <Row>
        <Col className='skills-image'>
        <Image  src='../SkillsImage.png'></Image>
        </Col>
        </Row>
    </Container>
  );
}

export default Skills;