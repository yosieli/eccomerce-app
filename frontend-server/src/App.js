import React from 'react';
//import logo from './logo.svg';
import CartList from './components/CartList.js'
import Nav from './components/Nav'
//import data from './components/data.js'
import './App.css';
import {Favorites} from './favorites.js'
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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      //render cartlist
      <div>
        <Favorites/>
      </div>

     
               
      )

  }
  
}


