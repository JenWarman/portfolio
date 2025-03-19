import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
    <Container>
      <Row className='skills-row'>
        <Col className='icon-col'xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 16.svg'/>
        </Col>
        <Col className='icon-col'xs={1} md={1}>
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 14.svg'/>
        </Col>
        <Col className='icon-col'xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 15.svg'/>
           </Col>
        <Col className='icon-col' xs={1} md={1}>
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 17.svg'/>
        </Col>
        </Row>
        <Row className='skills-row'>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 5.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../typescript.svg'/>
        </Col>
        <Col className='icon-col'xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 8.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 10.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Mask group.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../angular-icon-1.svg'/>
        </Col>
        <Col className='icon-col'xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Group 13.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../postgresql-icon.svg'/>
        </Col>
        <Col className='icon-col' xs={1} md={1} >
        <Image className='animate_animated animate__fadeInDown skills-circle' src='../Jest.svg'/>
        </Col>
        </Row>
    </Container>
  );
}

export default Skills;