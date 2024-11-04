import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Footer() {
  return (
    <div className='footer'>
    <Navbar bg="dark" data-bs-theme="dark">
      <Nav  activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/"><h5>Jen Warman</h5></Nav.Link>
        </Nav.Item >
        <Nav.Item className='social-icon '>
          <Nav.Link href='https://www.linkedin.com/in/jen-warman-38198a172/' ><Image src='../LinkedIn.png'/></Nav.Link>
        </Nav.Item>
        <Nav.Item className='social-icon'>
          <Nav.Link href='https://github.com/JenWarman' ><Image src='../Github.png'/></Nav.Link>
        </Nav.Item>
        <Nav.Item className='social-icon ' >
          <Nav.Link href="mailto: jen.warman85@gmail.com" ><Image src='../Email.png'/></Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;