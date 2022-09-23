import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./Cartwidget";

const NavBar = () => {
    return (
        <Navbar bn="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    tienda de productos
                </Navbar.Brand>
                <Nav ClassName="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Zapatillas">Zapatillas</Nav.Link>
                    <Nav.Link href="#Ropa">Ropa</Nav.Link>
                    <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#Contactos">Contactos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;