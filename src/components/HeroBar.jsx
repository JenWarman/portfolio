import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HeroBar() {
  return (
    <Container className="hero-bar">
      <Row>
      <Col xs={6} md={4}>
          <h1 className='hero-header'>Designer</h1>
          <h4 className='hero-sub-header'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</h4>
        </Col>
        <Col xs={6} md={4}>
          <Image src="../profile.jpg" rounded fluid/>
        </Col>
        
        <Col xs={6} md={4}>
          <h1 className='hero-header'>Developer</h1>
          <h4 className='hero-sub-header'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroBar;