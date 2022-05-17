import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Container, Nav } from 'react-bootstrap'



const Header = () => {
  const  counter = 1
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">RYM!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Shop</Nav.Link>
              <Nav.Link href="/details">My Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          <span className="badge bg-danger">{counter}(Example)</span>
        </Container>
      </Navbar>
    )
}

export default Header