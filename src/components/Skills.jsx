import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
    <Container className='skills'>
      <Row className='justify-content-center'>
        <Col xs={4} md={2}>
          <Image src="./figma.png" roundedCircle />
        </Col>
        <Col xs={4} md={2}>
          <Image src="./adobe.png" roundedCircle />
        </Col>
        <Col xs={4} md={2}>
          <Image src="./JavaScript.png" roundedCircle />
        </Col>
        <Col xs={4} md={2} >
          <Image src="./HTML.png" roundedCircle />
        </Col>
        <Col xs={4} md={2}>
          <Image src="./CSS.png" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;