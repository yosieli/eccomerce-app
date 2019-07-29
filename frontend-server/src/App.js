import React from 'react';
//import logo from './logo.svg';
import CartList from './components/CartList.js'
import Nav from './components/Nav'
//import data from './components/data.js'
import './App.css';

import {Favorites} from './components/favorites.js'
import {Browse} from './components/Browse.js'
import Login from './components/Login'

 export default class App extends React.Component {
     state={
       items:[],
       cart:[],
       total:0
     }

     componentDidMount(){
       fetch('http://localhost:3000/items')
       .then(res => res.json())
       .then(result=> {
         this.setState({
           items:result
         })
       })
     }

  render(){

    return (
      <div>
        <Browse/>
      </div>         
      )

  }
  
}


