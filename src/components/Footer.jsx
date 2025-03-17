import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">
              <h5 className="">Jen Warman</h5>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="social-icon ">
            <Nav.Link target="_blank" href="https://www.linkedin.com/in/jen-warman-38198a172/">
              <Image src="../LinkedIn.png" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="social-icon">
            <Nav.Link target="_blank" href="https://github.com/JenWarman">
              <Image id='footer-icon'src="../Github.png" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="social-icon ">
            <Nav.Link href="mailto: jen.warman85@gmail.com">
              <Image src="../Email.png" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
