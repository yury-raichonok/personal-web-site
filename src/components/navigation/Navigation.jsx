import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'flag-icon-css/css/flag-icon.min.css';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const LableConteiner = styled.div`
  a {
    color: #000;
    font-family: Bebas Neue;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    padding: 0;
    text-decoration: none;
  }
`;

const NavbarLinkContainer = styled.div`
  a {
    color: #000;
    font-family: Bebas Neue;
    font-size: 25px;
    font-weight: 500;
    padding: 10px 20px;
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  a:hover {
    background: #f8f9fa;
  }

  @media (max-width: 991px) { 
    padding: 17px 0px;
    width: 100%;

    a {
      width: 100%;
    }
  }
`;

const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand>
            <LableConteiner>
              <Link activeClass="about" spy={true} >YURY RAICHONAK</Link>
            </LableConteiner>
            <DescriptionContainer>
              Java | AEM developer
            </DescriptionContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"/>
            <Nav  >
              <NavbarLinkContainer><Link to="about" spy={true} >About</Link></NavbarLinkContainer>
              <NavbarLinkContainer><Link to="work" spy={true} >W&A</Link></NavbarLinkContainer>
              <NavbarLinkContainer><Link to="skills" spy={true} >Skills</Link></NavbarLinkContainer>
              <NavbarLinkContainer><Link to="languages" spy={true} >Languages</Link></NavbarLinkContainer>
              <NavbarLinkContainer><Link to="hobbies" spy={true} >Hobbies</Link></NavbarLinkContainer>
              <NavbarLinkContainer><Link to="contact" spy={true} >Contact</Link></NavbarLinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation
