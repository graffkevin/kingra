import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './styleNav.css'

function NavigationTool() {

    return (
        <Navbar className='navColor' variant="dark" fixed="top">
                <div>     
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                        <Nav.Link as={Link} to="/parcours">A propos</Nav.Link>
                        <Nav.Link as={Link} to="/competences">Compétences</Nav.Link>
                        <Nav.Link as={Link} to="/experiences">Expériences</Nav.Link>
                        <Nav.Link as={Link} to="/projets">Projets</Nav.Link>
                    </Nav>
                </div>
        </Navbar>
    )
}

export default NavigationTool
