import React from 'react';

import {Nav, NavDropdown, Button, Navbar, Container} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">ADMIN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown className="justify-content-left" title="Menu Utama" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/ustadz">Ustadz</NavDropdown.Item>
                            <NavDropdown.Item href="/santri">Santri</NavDropdown.Item>
                            <NavDropdown.Item href="/kelas">Kelas</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Button variant="success">Masuk</Button>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                
            </div>
        )
    }
}

export default NavigationBar;
