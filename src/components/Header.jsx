import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

function Header() {
  const [showAnimated2, setShowAnimated2] = useState(false);
    return (
      <>
      <section className='mb-3'>
        <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='second-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated2}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 1
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
        {/* <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/" id='header-title'>Jen Warman</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/about" >About</Nav.Link>
              <Nav.Link href="/projects" >Projects</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jen-warman-38198a172/" >Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
        </>
    )
}

export default Header;

