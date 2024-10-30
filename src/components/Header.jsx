import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import styles from '../App.module.css';

function Header() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/">Jen Warman</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jen-warman-38198a172/">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Header;