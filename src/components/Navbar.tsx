import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FC } from "react";
import { Link } from "react-router-dom";

interface AppNavbarProps {}

const AppNavbar: FC<AppNavbarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="flex-column">
        <Row className="justify-content-center w-100">
          <Col className="text-center">
            <Navbar.Brand>
              <Link to="/" className="site-title">
                STAR WARS
              </Link>
            </Navbar.Brand>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center w-100">
                <Nav.Link as={Link} to="/films">
                  FILMS
                </Nav.Link>
                <Nav.Link as={Link} to="/people">
                  PEOPLE
                </Nav.Link>
                <Nav.Link as={Link} to="/planets">
                  PLANETS
                </Nav.Link>
                <Nav.Link as={Link} to="/species">
                  SPECIES
                </Nav.Link>
                <Nav.Link as={Link} to="/starships">
                  STARSHIPS
                </Nav.Link>
                <Nav.Link as={Link} to="/vehicles">
                  VEHICLES
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;