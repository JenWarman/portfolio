import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
    <Container className='skills'>
      <Row className='justify-content-center'>
        <Col xs={4} md={2}>
        <div className='skills-circle' id='figma'>Figma</div>
          {/* <Image src="./figma.png" roundedCircle /> */}
        </Col>
        <Col xs={4} md={2}>
          {/* <Image src="./adobe.png" roundedCircle /> */}
          <div className='skills-circle' id='adobe'>Adobe Creative Suite</div>
        </Col>
        <Col xs={4} md={2}>
          {/* <Image src="./JavaScript.png" roundedCircle /> */}
          <div className='skills-circle' id='javascript'>JavaScript</div>
        </Col>
        <Col xs={4} md={2} >
          {/* <Image src="./HTML.png" roundedCircle /> */}
          <div className='skills-circle' id='html'>HTML</div>
        </Col>
        <Col xs={4} md={2}>
          {/* <Image src="./CSS.png" roundedCircle /> */}
          <div className='skills-circle' id='css'>CSS</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;