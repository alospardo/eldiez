import React, { Component } from 'react'
import '../components/css/Navigator.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


export default class Navigator extends Component {


    render() {
        return (
                  
                 <Navbar className="olxcll" collapseOnSelect sticky='top' expand='sm' bg='light' variant='light'>
                     <Container>
                         <NavbarToggle aria-controls='responsive-navbar-nav'/>
                         <NavbarCollapse id='responsive-navbar-nav'>
                             <Nav className="mx-auto">
                                 <Nav.Link className="pr-10" href='/ligacolombia'><img src="images/logos/logo_ligabet.ico" alt="bandera colombia"/>Liga Betplay</Nav.Link>
                                 <Nav.Link className="pr-20" href='/ligamx'><img src="images/logos/logo_mx.ico" alt="bandera colombia"/>Liga MX</Nav.Link>
                                 <Nav.Link className="pr-20" href='/champions'><img src="images/logos/logo_champions.ico" alt="bandera colombia"/>Champions</Nav.Link>
                                 <Nav.Link className="pr-20" href='/laliga'><img src="images/logos/logo_laliga.ico" alt="bandera colombia"/>LaLiga</Nav.Link>
                                 <Nav.Link className="pr-20" href='/premierleague'><img src="images/logos/logo_premier.ico" alt="bandera colombia"/>Premier League</Nav.Link>
                             </Nav>
                         </NavbarCollapse>
                     </Container>
                 </Navbar>
            
        )
    }
}
