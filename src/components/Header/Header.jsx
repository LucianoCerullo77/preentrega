import CartWidget from "../CartWidget/CartWidget";
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"
export default function Header () {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link active" aria-current="page">Fennex</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                <Link to="/products" className="nav-link active" aria-current="page">Products</Link>
                <Link to="/category/1" className="nav-link active" aria-current="page">Mouses</Link>
                <Link to="/category/2" className="nav-link active" aria-current="page">Keyboards</Link>
                <Link to="/category/2" className="nav-link active" aria-current="page">Headsets</Link>
                </Nav>
          </Navbar.Collapse>
          <CartWidget />
          <span className="badge bg-danger"></span>
        </Container>
      </Navbar>
    </header>
  );
}