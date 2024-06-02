import { Navbar, Nav, Container } from "react-bootstrap";
import { FC } from "react";
import { Link } from "react-router-dom";

interface AppNavbarProps {}

const AppNavbar: FC<AppNavbarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="pointer title text-white text-decoration-none"
          >
            Star Wars Encyclopedia
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/films">
              Films
            </Nav.Link>
            <Nav.Link as={Link} to="/people">
              People
            </Nav.Link>
            <Nav.Link as={Link} to="/planets">
              Planets
            </Nav.Link>
            <Nav.Link as={Link} to="/species">
              Species
            </Nav.Link>
            <Nav.Link as={Link} to="/starships">
              Starships
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles">
              Vehicles
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
