import { Navbar, Nav } from "react-bootstrap";

function Sidebar() {
    return (
        <Navbar variant="light" className="navbar-fixed-side">
            <Nav className="flex-column">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Profile</Nav.Link>
                <Nav.Link href="#">Settings</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Sidebar;
