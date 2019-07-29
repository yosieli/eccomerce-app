import React from 'react';
//import logo from './logo.svg';
import CartList from './components/CartList.js'
import Nav from './components/Nav'
//import data from './components/data.js'
import './App.css';

import {Favorites} from './components/favorites.js'
import {Browse} from './components/Browse.js'
import Signin from './components/Signin.js'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'

import CheckOutForm from './components/CheckOutForm'
 export default class App extends React.Component {
     state={
       items:[],
       cart:[],
       total:0
     }

   
  render(){

    return (
      <div>
        <BrowserRouter >
          <Route exact path = '/sign-in' component = {Signin}/>
          <Route exact path = '/browse' component = {Browse}/>
        </BrowserRouter> 
      </div>
      )
  } 
}
