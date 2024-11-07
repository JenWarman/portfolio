import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HeroBar() {
  return (
      <>
      {/* <div className='diagonal-box'></div> 
      <div className="content"> */}
    <Container className="hero-bar">
      <Row className='hero-row'>
      <Col className='slide-right' xs={6} md={4}>
          <h1 id='designer' className='hero-header'>Designer</h1>
          <h5 className='designer-hero-sub-header'>UI/UX design for engaging and functional digital experiences. </h5>
        </Col>
        <Col className='profile-image' xs={7} md={4}>
          <Image src="../profile.jpg" rounded fluid/>
        </Col>
        <Col className='slide-left' id='developer'xs={6} md={4}>
          <h1 className='hero-header'>Developer</h1>
          <h5 className='developer-hero-sub-header'>Frontend web development with solid and scaleable code. </h5>
        </Col>
        <Row>
        <Col>
          <h1 className='media-hero-header'>Designer & Developer</h1>
          </Col>
        </Row>
        <Row>
        <Col>
          <p className='media-hero-sub-header'>ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</p>
          </Col>
        </Row>
      </Row>
    </Container>
    {/* </div> */}
    </>
  );
}

export default HeroBar;