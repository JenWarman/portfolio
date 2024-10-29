import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import styles from '../App.module.css';

function Header() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Jen Warman</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Header;