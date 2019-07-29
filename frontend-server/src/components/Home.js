import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'



import './Home.css'


export default class Home extends React.Component{
    state = {

    }


    render(){
        return(
            <div >
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                    <img
                        src="logo.png"
                        width="200px"
                        height="80px"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => console.log("h")}>Upload</Nav.Link>
                            <Nav.Link href = '/browse'>Browse</Nav.Link>
                            <Nav.Link href = '/myFavorites'>Favorites</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href = '/myCart'>Cart</Nav.Link>
                            <Nav.Link href="#deets">Sign-Out</Nav.Link>
                        </Nav>
                </Navbar>

            </div>
        )
    }
}