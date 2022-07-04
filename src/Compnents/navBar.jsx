import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
      <Nav.Link as={Link} to="/ToDo">To do list</Nav.Link>
      <Nav.Link as={Link} to="/Counter">Support</Nav.Link>
      <Nav.Link as={Link} to="/Register">Register</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
  )
}

export default NavBar;