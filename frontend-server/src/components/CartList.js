import React from 'react'
import CartItems from './CartItems'
import Payment from './Payment'
export default  class Cart  extends React.Component {

    
    byeItem = (id) => {
        alert('you bought it!')

    }

    clearCart = () =>{
       
    }

    showDetails = () =>{
        
    }

    render(){
     let items = this.props.items 
    
    return(
        items.map(item => {
            return(
              <CartItems  item = {item}  total={this.props.total} byeItem={this.byeItem} clearCart={this.clear} showDetails={this.showDetails}/>
                
            )
        })
        )
    }


}