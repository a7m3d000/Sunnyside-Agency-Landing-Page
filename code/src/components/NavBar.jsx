// Libs & Framewirks
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Style
const Parent = styled.section`
  .navbar {
    background-color: transparent !important;
    padding: 1rem;
    background: #3ebfff !important;

    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      z-index: 3;
      width: 100%;
    }
  }

  .nav-heading {
    font-weight: bolder;
    font-size: 2em;
  }

  .navbar-collapse {
    font-weight: bold;
    width: 100% !important;

    .nav-link {
      padding: 0.5rem 0.7rem;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: #9adbfb96;
      }
    }

    .link {
      text-decoration: none;
    }

    @media screen and (max-width: 992px) {
      background: #74d1ff82;
      margin-top: 1rem;
      padding: 0.7em;
      border-radius: 10px;

      .nav-link {
        margin-bottom: 0.7em;
      }
    }

    @media screen and (max-width: 768px) {
      background: #fff;

      .nav-link {
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        width: 200px;
        margin: auto;
        color: #86848f;
      }
    }
  }

  .active {
    color: #000 !important;
    background: #fff !important;

    @media screen and (max-width: 768px) {
      background: #fdd302 !important;
    }
  }
`;

// JSX
const NavBar = () => {
  return (
    <Parent>
      <Navbar bg="light" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="nav-heading">
            sunnyside
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="ms-auto my-2 my-lg-0">
              <Link to="/body" className="link">
                <Nav.Link href="#action1" className="mx-lg-2 my-lg-3">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/about" className="link">
                <Nav.Link href="#action2" className="mx-lg-2 my-lg-3">
                  About
                </Nav.Link>
              </Link>
              <Link to="/services" className="link">
                <Nav.Link href="#action3" className="mx-lg-2 my-lg-3">
                  Services
                </Nav.Link>
              </Link>
              <Link to="/projects" className="link">
                <Nav.Link href="#action4" className="mx-lg-2 my-lg-3">
                  Projects
                </Nav.Link>
              </Link>
              <Link to="/contacts" className="link">
                <Nav.Link href="#action5" className="mx-lg-2 my-lg-3">
                  Contacts
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Parent>
  );
};

export default NavBar;
