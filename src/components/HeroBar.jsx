import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HeroBar() {
  return (
    <Container className="hero-bar">
      <Row>
      <Col xs={4} md={2} >
          <h1 className='hero-header'>Designer</h1>
          <h5 className='hero-sub-header'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</h5>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col className='profile-image' xs={8} md={6}>
          <Image src="../profile.jpg" rounded fluid/>
        </Col>
        <Col></Col>
        <Col id='developer' xs={4} md={2}>
          <h1 className='hero-header'>Developer</h1>
          <h5 className='hero-sub-header'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroBar;