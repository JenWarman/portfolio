import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {

    return (
      <div className='scale-in-ver-top'>
        <Navbar  bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/" id='header-title'>Jen Warman</Navbar.Brand>
            <Nav className="ms-auto nav-bar">
              <Nav.Link href="/about" >About</Nav.Link>
              <Nav.Link href="/projects" >Projects</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jen-warman-38198a172/" >Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </div>
    )
}

export default Header;

