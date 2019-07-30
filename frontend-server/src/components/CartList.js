import React from 'react'
import CartItems from './CartItems'
import { Button } from 'react-bootstrap'
import CheckOutForm from './CheckOutForm'
import Nav from './Home.js'
//import ShowDetails from './ShowDetails'
export default  class Cart  extends React.Component {
    state = {
        myItems: [],
        total:0,
        buyItems: false
       
    }


    componentDidMount(){
     fetch(`http://localhost:3000/cartItems/${localStorage.getItem('user')}`,{
         method: "GET",
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem('token')}`
         }
     })
     .then(res=>res.json())
     .then(result=>this.setState({
         myItems:result
     })).then(this.buyItems)
    }

  
    buyItems = ()=>{
        let counter =0
        this.state.myItems.forEach(item=>counter += parseInt(item.price))
        this.setState({
            total:counter,
            
        })
    }


    removeItem = (item)=>{
         let myItems = this.state.myItems.filter(items => {
                return items.id !== item.id
            })
         this.setState({
             myItems: myItems,
             total: this.state.total-(item.quantity * item.price)
         })
    }
   
    handleSubmit = ()=>{
        console.log("h")
        this.setState({
            buyItems: !this.state.buyItems
        })

    }


    buySpecificItem = (item)=>{
        let myItems = this.state.myItems.filter(items => {
            return items.id !== item.id
        })
     this.setState({
         myItems: myItems,
         total: this.state.total-(item.quantity * item.price),
         buyItems: !this.state.buyItems
     })

    }


    clearCart = () =>{
        this.setState({
            myItems:[],
            total:0
        })
       
    } 


    render(){
     let items = this.state.myItems
     let shown
     console.log(this.state.buyItems)
     if(this.state.buyItems){
        shown = (  <div className="app-container">
                        <div className="row">
                            <div className="col no-gutters">
                                <CheckOutForm  handleSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>)
    }
    else{
        shown = (
        <div>
            <Nav/>
            <h3> My Cart items</h3>
            <h3><Button onClick={() => this.clearCart(this.clearCart)}  >Clear all</Button> </h3> 
            

            {items.map(item => {
                return(
                <div>
                <CartItems  item = {item}    clearCart={this.clearCart}  removeItem={this.removeItem} byeItems={this.buySpecificItem} /> 
                {/* <ShowDetails show={this.show.showDetails}  showDetails={this.showDetails}/> */}
                </div> 
                )
            })}
                <p>Total:${this.state.total} </p>

         </div>)

    }
     return(
        shown
        )
    }


}