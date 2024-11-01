import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HeroBar() {
  return (
      <>
    <div className='diagonal-box'></div> 
    <div className="content">
    <Container className="hero-bar">
      <Row>
      <Col xs={4} md={2} >
          <h1 id='designer' className='hero-header'>Designer</h1>
          <h5 className='hero-sub-header'>UI/UX design for engaging and functional digital experiences. </h5>
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
          <h5 className='hero-sub-header'>Frontend web development with solid and scaleable code. </h5>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default HeroBar;