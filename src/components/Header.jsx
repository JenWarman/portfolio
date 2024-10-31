import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import styles from '../App.module.css';

function Header() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/" id='header-title'>Jen Warman</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/about" ><h4>About</h4></Nav.Link>
              <Nav.Link href="/projects" ><h4>Projects</h4></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jen-warman-38198a172/" ><h4>Contact</h4></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Header;