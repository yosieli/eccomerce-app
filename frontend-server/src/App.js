import React from 'react';
import CartList from './components/CartList.js'
import './App.css';
import {Favorites} from './components/favorites.js'
import {Browse} from './components/Browse.js'
import Signin from './components/Signin.js'
import SignUp from './components/SignUp.js'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import ItemSpec from './components/ItemSpec.js'


 export default class App extends React.Component {
     state={
       items:[],
       cart:[],
       total:0
     }

   
  render(){
    let nav = (<Navbar style = {{backgroundColor: 'rgb(166, 184, 54)'}}sticky = 'top' className="bg-custom" collapseOnSelect  variant="light">
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
</Navbar>)
    if(window.location.href === "http://localhost:3001/sign-up" || window.location.href === "http://localhost:3001/sign-in"){
      nav = null
    }
    return (

      <div>
        {nav}
        <div>
        <BrowserRouter >
          <Route exact path = '/sign-in' component = {Signin}/>
          <Route exact path = '/sign-up' component = {SignUp}/>
          <Route exact path = '/browse' component = {Browse}/>
          <Route exact path = '/myCart' component = {CartList}/>
          <Route exact path = '/myFavorites' component = {Favorites}/>
          <Route exact path = '/description' component = {ItemSpec}/>
        </BrowserRouter> 
        </div>
      </div>
      )
  } 


      

}
