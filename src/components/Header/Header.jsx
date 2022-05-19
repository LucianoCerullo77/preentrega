import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'



const Header = () => {
  const  counter = 1
    return(
      <Navbar bg="light" expand="lg">
        <Container>
        <Link to='/' className="nav-link active" aria-current="page">fENNEX</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              <Link to='/products' className="nav-link active" aria-current="page">Shop</Link>
              <Link to='/details' className="nav-link active" aria-current="page">My Products</Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          <span className="badge bg-danger">{counter}(Example)</span>
        </Container>
      </Navbar>
    )
}

export default Header

