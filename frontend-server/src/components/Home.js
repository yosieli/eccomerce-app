import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import './Home.css'

export default class Home extends React.Component{
    state = {

    }

    render(){
        return(
            <div className="sticky">
                <Navbar className="bg-custom" collapseOnSelect  variant="light">
                    <img
                        src="logo.png"
                        width="200px"
                        height="80px"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => console.log("h")}><strong> Upload </strong></Nav.Link>
                            <Nav.Link href = '/browse'> <strong> Browse </strong> </Nav.Link>
                            <Nav.Link href = '/myFavorites'><strong> Favorites </strong></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href = '/myCart'><strong> Cart </strong></Nav.Link>
                            <Nav.Link href="#deets"><strong> Sign-Out </strong></Nav.Link>
                        </Nav>
                </Navbar>

            </div>
        )
    }
}