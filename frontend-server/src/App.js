import React from 'react';
//import logo from './logo.svg';
import CartList from './components/CartList.js'
import Nav from './components/Nav'
//import data from './components/data.js'
import './App.css';

import {Favorites} from './favorites.js'
import Login from './components/Login'

import Signin from './components/Signin'

import Home from './components/Home'

import './components/Home.css'

function App() {
  return (

    
      
    <div className="App "   >
      <header  >
        {/* <Signin /> */}
        {/* <Favorites /> */}
        <Home />
      </header>
      </div>

      
    
  );
}

export default App