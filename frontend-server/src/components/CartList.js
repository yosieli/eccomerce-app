import React from 'react'
import CartItems from './CartItems'
export default  class Cart  extends React.Component {

    render(){
     let items = this.props.items 
     return(
        items.map(item => {
            return(
              <CartItems item = {item} />  
            )
        })
     )
    }

}