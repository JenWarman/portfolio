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
        <Col className='icon-col'xs={4} md={1} >
        <Image className='skills-circle' src='../Group 16.svg'/>
        </Col>
        <Col className='icon-col'xs={4} md={1} xs={4} md={1} >
        <Image className='skills-circle' src='../Group 14.svg'/>
        </Col>
        <Col className='icon-col'xs={4} md={1} xs={4} md={1} >
        <Image className='skills-circle' src='../Group 15.svg'/>
           </Col>
        <Col className='icon-col' xs={4} md={1}>
        <Image className='skills-circle' src='../Group 17.svg'/>
        </Col>
        </Row>
        <Row>
      <h2 className='skills-title' id='development-skills-title'>Development</h2>
      </Row>
        <Row className='skills-row'>
        <Col className='icon-col' xs={4} md={1} >
        <Image className='skills-circle' src='../Group 5.svg'/>
        </Col>
        <Col className='icon-col'xs={4} md={1} >
        <Image className='skills-circle' src='../Group 9.svg'/>
        </Col>
        <Col className='icon-col'xs={4} md={1} >
        <Image className='skills-circle' src='../Group 8.svg'/>
        </Col>
        <Col className='icon-col' xs={4} md={1} >
        <Image className='skills-circle' src='../Group 10.svg'/>
        </Col>
        <Col className='icon-col' xs={4} md={1} >
        <Image className='skills-circle' src='../Mask group.svg'/>
        </Col>
        <Col className='icon-col'xs={4} md={1} >
        <Image className='skills-circle' src='../Group 13.svg'/>
        </Col>
        <Col className='icon-col' xs={4} md={1} >
        <Image className='skills-circle' src='../postgresql-icon.svg'/>
        </Col>
        <Col className='icon-col' xs={4} md={1} >
        <Image className='skills-circle' src='../Jest.svg'/>
        </Col>
        </Row>
    </Container>
  );
}

export default Skills;