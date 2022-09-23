import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    tienda de productos
                </Navbar.Brand>
                <Nav ClassName="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#zapatillas">Zapatillas</Nav.Link>
                    <Nav.Link href="#ropa">Ropa</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#contactos">Contactos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;