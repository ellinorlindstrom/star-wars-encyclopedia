import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FC } from 'react';

interface AppNavbarProps {}

const AppNavbar: FC<AppNavbarProps> = () => {
  return (
    <Navbar 
      bg="dark" 
      variant="dark"
      expand="lg"
      >
      <Container>
        <Navbar.Brand>Star Wars Encyclopedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/films">
            <Nav.Link>Films</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/people">
            <Nav.Link>People</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/planets">
            <Nav.Link>Planets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/species">
            <Nav.Link>Species</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/starships">
            <Nav.Link>Starships</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/vehicles">
            <Nav.Link>Vehicles</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default AppNavbar;

