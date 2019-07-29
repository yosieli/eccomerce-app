import React from 'react'
import CartItems from './CartItems'
//import ShowDetails from './ShowDetails'
export default  class Cart  extends React.Component {
    state = {
        myItems: [],
        total:0,
       
    }


    componentDidMount(){
     fetch(`http://localhost:3000/cartItems/hk72`,{})
     .then(res=>res.json())
     .then(result=>this.setState({
         myItems:result
     })).then(this.byeItems)
    }

  
    byeItems = ()=>{
        let counter =0
        this.state.myItems.forEach(item=>counter += parseInt(item.price))
        this.setState({
            total:counter
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

         
    buyAllItems = ()=>{
        this.setState({
            myItems:[],
            total:0
        })
        alert('you bought the item')
    }


    buySpecificItem = (item)=>{
        let myItems = this.state.myItems.filter(items => {
            return items.id !== item.id
        })
     this.setState({
         myItems: myItems,
         total: this.state.total-(item.quantity * item.price)
     })
     alert('you bought the item')
    }


    clearCart = () =>{
        this.setState({
            myItems:[],
            total:0
        })
       
    } 


    render(){
     let items = this.state.myItems
    
     return(
        
        <div>
        <h2>Cart items</h2>
        <h3><button onClick={() => this.clearCart(this.clearCart)} >Clear all</button> </h3> 
        

        {items.map(item => {
            return(
              <div>
              <CartItems  item = {item}    clearCart={this.clearCart}  removeItem={this.removeItem} byeItems={this.buySpecificItem} /> 
              {/* <ShowDetails show={this.show.showDetails}  showDetails={this.showDetails}/> */}
              </div> 
            )
    })}

       

         <p>Total:${this.state.total} </p>

        </div>

        )
    }


}