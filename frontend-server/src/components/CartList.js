import React from 'react'
import CartItems from './CartItems'
//import ShowDetails from './ShowDetails'
export default  class Cart  extends React.Component {
    state = {
        myItems: [],
        total:0,
       
    }

    
    showDetails = () => {
        this.setState({
            showDetails: !this.show.showDetails
        })
        console.log('clicked')
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

   


    // removeItem = () =>{
    //     fetch('http://localhost:3000/cartItems/hk72/1',{
    //         method: "DELETE",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res=>
    //         this.fetchCartItems)
        
    // }

    // removeItem = (itemId) => {
    //     console.log('this is ',itemId)
    //     const items = this.state.myItems.filter(item => item.id !== itemId)
      
    //     this.setState({ items })
    //   }



    removeItem = (itemId)=>{
        console.log(itemId)
        this.setState({
            item: this.state.myItems.filter(item => item.id !== itemId)
        })
    }
         
    buyAllItems = ()=>{
        this.setState({
            myItems:[]
        })
    }

    clearCart = () =>{
        this.setState({
            myItems:[]
        })
       
    } 

    render(){
     let items = this.state.myItems
    
    return(
        
        <div>
        <h2>Cart items</h2>
        <h3><button onClick={() => this.clearCart(this.clearCart)}>Clear all</button> </h3> 
        

        {items.map(item => {
            return(
              <div>
              <CartItems  item = {item}    clearCart={this.clearCart}  removeItem={this.removeItem}  /> 
              {/* <ShowDetails show={this.show.showDetails}  showDetails={this.showDetails}/> */}
              </div> 
            )
        })}

       

         <p>Total:${this.state.total} </p>
        <button >buy</button> 

        </div>

        )
    }


}